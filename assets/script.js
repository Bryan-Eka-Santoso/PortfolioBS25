        // For All Pages
        const about = document.querySelectorAll("#about");
        const resume = document.querySelectorAll("#resume");
        const projects = document.querySelectorAll("#projects");
        const contact = document.querySelectorAll("#contact");

        function clickAbout(){
          about.forEach(element => {
            element.style.display = "block";
          });
          resume.forEach(element => {
            element.style.display = "none";
          });
          projects.forEach(element => {
            element.style.display = "none";
          });
          contact.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickResume(){
          about.forEach(element => {
            element.style.display = "none";
          });
          resume.forEach(element => {
            element.style.display = "block";
          });
          projects.forEach(element => {
            element.style.display = "none";
          });
          contact.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickProjects(){
          about.forEach(element => {
            element.style.display = "none";
          });
          resume.forEach(element => {
            element.style.display = "none";
          });
          projects.forEach(element => {
            element.style.display = "block";
          });
          contact.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickContact(){
          about.forEach(element => {
            element.style.display = "none";
          });
          resume.forEach(element => {
            element.style.display = "none";
          });
          projects.forEach(element => {
            element.style.display = "none";
          });
          contact.forEach(element => {
            element.style.display = "block";
          });
        }
        // End
        
        // For Projects
        const blog = document.querySelectorAll("#blog");
        const webdes = document.querySelectorAll("#webdes");
        const webdev = document.querySelectorAll("#webdev");
        const cpp = document.querySelectorAll("#cpp");

        function callAll(){
        blog.forEach(element => {
          element.style.display = "block";
        });
        webdes.forEach(element => {
          element.style.display = "block";
        });
        webdev.forEach(element => {
          element.style.display = "block";
        });
        cpp.forEach(element => {
          element.style.display = "block";
        });
      }

        function callWebDes(){
        blog.forEach(element => {
          element.style.display = "none";
        });
        webdes.forEach(element => {
          element.style.display = "block";
        });
        webdev.forEach(element => {
          element.style.display = "none";
        });
        cpp.forEach(element => {
          element.style.display = "none";
        });
      }

        function callWebDev(){
        blog.forEach(element => {
          element.style.display = "none";
        });
        webdes.forEach(element => {
          element.style.display = "none";
        });
        webdev.forEach(element => {
          element.style.display = "block";
        });
        cpp.forEach(element => {
          element.style.display = "none";
        });
      }

        function callCpp(){
        blog.forEach(element => {
          element.style.display = "none";
        });
        webdes.forEach(element => {
          element.style.display = "none";
        });
        webdev.forEach(element => {
          element.style.display = "none";
        });
        cpp.forEach(element => {
          element.style.display = "block";
        });
      }

        function callBlog(){
        blog.forEach(element => {
          element.style.display = "block";
        });
        webdes.forEach(element => {
          element.style.display = "none";
        });
        webdev.forEach(element => {
          element.style.display = "none";
        });
        cpp.forEach(element => {
          element.style.display = "none";
        });
      }
    //   Projects End
    // For Click Read More Text
    const m_internship1 = document.querySelectorAll(".more-internship1");
    const readmoreTxt = document.querySelectorAll(".readmore");

    function clickIntership1(){
      m_internship1.forEach(element => {
        element.style.display = "block";
      });
      readmoreTxt.forEach(element => {
        element.style.display = "none";
      });
    }
    // End
    // Certificates
    const achievements = document.querySelectorAll("#achievements");
    const events = document.querySelectorAll("#events");
    const organizations = document.querySelectorAll("#organizations");

    function clickAll(){
      achievements.forEach(element => {
        element.style.display = "block";
      });
      events.forEach(element => {
        element.style.display = "block";
      });
      organizations.forEach(element => {
        element.style.display = "block";
      });
    }

    function clickAchievements(){
      achievements.forEach(element => {
        element.style.display = "block";
      });
      events.forEach(element => {
        element.style.display = "none";
      });
      organizations.forEach(element => {
        element.style.display = "none";
      });
    }

    function clickEvents(){
      achievements.forEach(element => {
        element.style.display = "none";
      });
      events.forEach(element => {
        element.style.display = "block";
      });
      organizations.forEach(element => {
        element.style.display = "none";
      });
    }

    function clickOrganizations(){
      achievements.forEach(element => {
        element.style.display = "none";
      });
      events.forEach(element => {
        element.style.display = "none";
      });
      organizations.forEach(element => {
        element.style.display = "block";
      });
    }
    // End
    // Light and dark mode
    const lightModeBtn = document.querySelectorAll(".btn-lightmode");
    const darkModeBtn = document.querySelectorAll(".btn-darkmode");
    const body = document.querySelectorAll("body");

    function darkMode(){
      lightModeBtn.forEach(element => {
        element.style.display = "block";
      });
      darkModeBtn.forEach(element => {
        element.style.display = "none";
      });
      body.forEach(element => {
        element.style.backgroundColor = "var(--light)";
      });
    }
    
    function lightMode(){
      lightModeBtn.forEach(element => {
        element.style.display = "none";
      });
      darkModeBtn.forEach(element => {
        element.style.display = "block";
      });
      body.forEach(element => {
        element.style.backgroundColor = "var(--dark)";
      });
    }
    // End