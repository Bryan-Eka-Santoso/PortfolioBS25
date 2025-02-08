        // For All Pages
        const aboutEn = document.querySelectorAll("#about-en");
        const resumeEn = document.querySelectorAll("#resume-en");
        const projectsEn = document.querySelectorAll("#projects-en");
        const contactEn = document.querySelectorAll("#contact-en");

        const aboutId = document.querySelectorAll("#about-id");
        const resumeId = document.querySelectorAll("#resume-id");
        const projectsId = document.querySelectorAll("#projects-id");
        const contactId = document.querySelectorAll("#contact-id");

        function clickAbout(){
          aboutEn.forEach(element => {
            element.style.display = "block";
          });
          resumeEn.forEach(element => {
            element.style.display = "none";
          });
          projectsEn.forEach(element => {
            element.style.display = "none";
          });
          contactEn.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickResume(){
          aboutEn.forEach(element => {
            element.style.display = "none";
          });
          resumeEn.forEach(element => {
            element.style.display = "block";
          });
          projectsEn.forEach(element => {
            element.style.display = "none";
          });
          contactEn.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickProjects(){
          aboutEn.forEach(element => {
            element.style.display = "none";
          });
          resumeEn.forEach(element => {
            element.style.display = "none";
          });
          projectsEn.forEach(element => {
            element.style.display = "block";
          });
          contactEn.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickContact(){
          aboutEn.forEach(element => {
            element.style.display = "none";
          });
          resumeEn.forEach(element => {
            element.style.display = "none";
          });
          projectsEn.forEach(element => {
            element.style.display = "none";
          });
          contactEn.forEach(element => {
            element.style.display = "block";
          });
        }

        function clickAboutId(){
          aboutId.forEach(element => {
            element.style.display = "block";
          });
          resumeId.forEach(element => {
            element.style.display = "none";
          });
          projectsId.forEach(element => {
            element.style.display = "none";
          });
          contactId.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickResumeId(){
          aboutId.forEach(element => {
            element.style.display = "none";
          });
          resumeId.forEach(element => {
            element.style.display = "block";
          });
          projectsId.forEach(element => {
            element.style.display = "none";
          });
          contactId.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickProjectsId(){
          aboutId.forEach(element => {
            element.style.display = "none";
          });
          resumeId.forEach(element => {
            element.style.display = "none";
          });
          projectsId.forEach(element => {
            element.style.display = "block";
          });
          contactId.forEach(element => {
            element.style.display = "none";
          });
        }

        function clickContactId(){
          aboutId.forEach(element => {
            element.style.display = "none";
          });
          resumeId.forEach(element => {
            element.style.display = "none";
          });
          projectsId.forEach(element => {
            element.style.display = "none";
          });
          contactId.forEach(element => {
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
    // En and id mode language
    const enBtn = document.querySelectorAll(".btn-en");
    const idBtn = document.querySelectorAll(".btn-id");
    const textEn = document.querySelectorAll(".text-en");
    const textId = document.querySelectorAll(".text-id");
    
    function enMode(){
      enBtn.forEach(element => {
        element.style.display = "none";
      });
      idBtn.forEach(element => {
        element.style.display = "block";
      });
      textEn.forEach(element => {
        element.style.display = "block";
      });
      textId.forEach(element => {
        element.style.display = "none";
      });
      resumeEn.forEach(element => {
        element.style.display = "none";
      });
      projectsEn.forEach(element => {
        element.style.display = "none";
      });
      contactEn.forEach(element => {
        element.style.display = "none";
      });
    }
    
    function idMode(){
      enBtn.forEach(element => {
        element.style.display = "block";
      });
      idBtn.forEach(element => {
        element.style.display = "none";
      });
      textEn.forEach(element => {
        element.style.display = "none";
      });
      textId.forEach(element => {
        element.style.display = "block";
      });
      resumeId.forEach(element => {
        element.style.display = "none";
      });
      projectsId.forEach(element => {
        element.style.display = "none";
      });
      contactId.forEach(element => {
        element.style.display = "none";
      });
    }