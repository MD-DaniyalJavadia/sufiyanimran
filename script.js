    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
      for (tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");

    }
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
      sidemenu.style.right = "0";
    }
    function closemenu(){
      sidemenu.style.right = "-200px";
    }

  //   // Disable right-click
  //   document.addEventListener('contextmenu', function(e) {
  //       e.preventDefault();
  //   });

  //   // Disable F12 and Ctrl+Shift+C to prevent opening developer tools
  //   document.addEventListener('keydown', function(e) {
  //       // Disable F12
  //       if (e.key === 'F12') {
  //           e.preventDefault();
  //       }

  //       // Disable Ctrl+Shift+C
  //       if (e.ctrlKey && e.shiftKey && e.key === 'C') {
  //           e.preventDefault();
  //       }

	// //Disable Ctrl+Shift+I
  //       if (e.ctrlKey && e.shiftKey && e.key === 'I') {
  //           e.preventDefault();
  //       }

	

	// //Disable Ctrl+Shift+S
  //       if (e.ctrlKey && e.shiftKey && e.key === 'S') {
  //           e.preventDefault();
  //       }


	//   //Disable Ctrl+S
  //       if (e.ctrlKey && e.key === 's') {
  //           e.preventDefault();
  //       }
  //       //Disable Ctrl+U
  //       if (e.ctrlKey && e.key === 'u') {
  //           e.preventDefault();
  //       }
  //     // Disable Ctrl+U
  //     if (e.ctrlKey && e.key.toLowerCase() === 'u') {
  //           e.preventDefault();
  //       }

  //   });
    function handleError(img) {
    if (someCondition()) {
      img.src = 'images/DaniyalJavadia.JPG';  
    } else {
      img.src = 'images/profile.jpg';
    }
  }

  function someCondition() {
    return Math.random() > 0.5;  
  }
