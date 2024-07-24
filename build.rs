use std::{error::Error, io::Write, net::TcpListener, path::Path, process::Command, time::Duration};

/**
 * migrate the entire make to a single build
 */

//  spin a local server that commits to github every 3 hours
static ADDR: &str = "localhost:3000";

fn schedule_git_commits() -> Result<(), Box<dyn Error>> {
    let https = std::env::var("CARGO_FEATURE_HTTPS").is_ok();

    let schedule_duration = Duration::from_secs(180);
    if https {
        // run it
    }

    let commit_message = Command::new("git")
        .arg("diff")
        .output()
        .unwrap().stdout;

    _  = commit_message;

    let listener = TcpListener::bind(ADDR).unwrap();
    println!("commit redirect starts on {}", ADDR);

    while let Ok(mut stream) = listener.accept() {
        std::thread::sleep(schedule_duration);
        
        stream.0.write_all("HTTP/1.1 200 OK".as_bytes())?;
        stream.0.write_all(&commit_message)?;
    
    }


    Ok(())
}


fn package_and_build_application() {
    let build = Command::new("make")
        .arg("all")
        .status()
        .unwrap();

    if ! &build.success() {
        eprintln!("failed make, was unable to build the application");
        std::process::exit(1);    
    }
    _ = build;
    let bin_path = "calc";
    // this is how i have it configured
    cp_bin_sys(bin_path, "/home/linuxbrew/.linuxbrew/bin/calc");
}


fn cp_bin_sys(from: impl AsRef<Path>, to: impl AsRef<Path>) {
    for e in from.as_ref().read_dir().unwrap() {
        let e = e.unwrap();
        let from = e.path();
        let to = to.as_ref().join(e.file_name());
        if e.file_type().unwrap().is_dir() {
            std::fs::create_dir_all(&to).unwrap();
            cp_bin_sys(&from, &to);
        } else {
            println!("{} => {}", from.display(), to.display());
            std::fs::copy(&from, &to).unwrap();
        }
    }
}

fn main() -> Result<(), Box<dyn Error>> {

    // println!("cargo::rerun-if-changed=*");
    
    _ = schedule_git_commits();
    let bin_path = "calc";

    let mut bin = std::fs::OpenOptions::new()
        .read(true)
        .write(true)
        .open("dump.s")?;
    

    /* this might be a million lines of assembly, but hey its fast right? 🤣*/
    // 🚩 takes 30 seconds to write
    let dump_asm  = Command::new("objdump")
        .args(&["-d", bin_path])
        .output();
    
    bin.write_all(&dump_asm?.stdout)?;


    _ = package_and_build_application();
    Ok(())
}
