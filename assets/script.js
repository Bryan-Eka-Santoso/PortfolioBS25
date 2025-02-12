        // For All Pages
        const aboutEn = document.querySelectorAll("#about-en");
        const resumeEn = document.querySelectorAll("#resume-en");
        const projectsEn = document.querySelectorAll("#projects-en");
        const contactEn = document.querySelectorAll("#contact-en");

        const aboutId = document.querySelectorAll("#about-id");
        const resumeId = document.querySelectorAll("#resume-id");
        const projectsId = document.querySelectorAll("#projects-id");
        const contactId = document.querySelectorAll("#contact-id");

        const aboutBtn = document.querySelectorAll(".btn-about");
        const resumeBtn = document.querySelectorAll(".btn-resume");
        const projectsBtn = document.querySelectorAll(".btn-projects");
        const contactBtn = document.querySelectorAll(".btn-contact");

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
          aboutBtn.forEach(element => {
            element.style.display = "block";
          });
          resumeBtn.forEach(element => {
            element.style.display = "none";
          });
          projectsBtn.forEach(element => {
            element.style.display = "none";
          });
          contactBtn.forEach(element => {
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
          aboutBtn.forEach(element => {
            element.style.display = "none";
          });
          resumeBtn.forEach(element => {
            element.style.display = "block";
          });
          projectsBtn.forEach(element => {
            element.style.display = "none";
          });
          contactBtn.forEach(element => {
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
          aboutBtn.forEach(element => {
            element.style.display = "none";
          });
          resumeBtn.forEach(element => {
            element.style.display = "none";
          });
          projectsBtn.forEach(element => {
            element.style.display = "block";
          });
          contactBtn.forEach(element => {
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
          aboutBtn.forEach(element => {
            element.style.display = "none";
          });
          resumeBtn.forEach(element => {
            element.style.display = "none";
          });
          projectsBtn.forEach(element => {
            element.style.display = "none";
          });
          contactBtn.forEach(element => {
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
          aboutBtn.forEach(element => {
            element.style.display = "block";
          });
          resumeBtn.forEach(element => {
            element.style.display = "none";
          });
          projectsBtn.forEach(element => {
            element.style.display = "none";
          });
          contactBtn.forEach(element => {
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
          aboutBtn.forEach(element => {
            element.style.display = "none";
          });
          resumeBtn.forEach(element => {
            element.style.display = "block";
          });
          projectsBtn.forEach(element => {
            element.style.display = "none";
          });
          contactBtn.forEach(element => {
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
          aboutBtn.forEach(element => {
            element.style.display = "none";
          });
          resumeBtn.forEach(element => {
            element.style.display = "none";
          });
          projectsBtn.forEach(element => {
            element.style.display = "block";
          });
          contactBtn.forEach(element => {
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
          aboutBtn.forEach(element => {
            element.style.display = "none";
          });
          resumeBtn.forEach(element => {
            element.style.display = "none";
          });
          projectsBtn.forEach(element => {
            element.style.display = "none";
          });
          contactBtn.forEach(element => {
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
    const btnMenu = document.querySelectorAll('.btn-outline-dark');
    const link = document.querySelectorAll('a');
    const numberTimeline = document.querySelectorAll('.number-timeline');
    const ol = document.querySelectorAll('ol');

    function lightMode(){
      document.documentElement.setAttribute('data-bs-theme', 'light');
      lightModeBtn.forEach(element => {
        element.style.display = "block";
      });
      darkModeBtn.forEach(element => {
        element.style.display = "none";
      });
      body.forEach(element => {
        element.style.backgroundColor = "var(--light)";
      });
      btnMenu.forEach(element => {
        element.classList.remove("btn-outline-light");
        element.classList.add("btn-outline-dark");
      });
      link.forEach(element => {
        element.style.color = "var(--dark)";
      });
      numberTimeline.forEach(element => {
        element.style.color = "var(--light)";
        element.style.backgroundColor = "var(--dark)";
      });
      ol.forEach(element => {
        element.style.borderLeft = "2px solid var(--dark)";
      });
    }
    
    function darkMode(){
      document.documentElement.setAttribute('data-bs-theme', 'dark');

      lightModeBtn.forEach(element => {
        element.style.display = "none";
      });
      darkModeBtn.forEach(element => {
        element.style.display = "block";
      });
      body.forEach(element => {
        element.style.backgroundColor = "var(--dark)";
      });
      btnMenu.forEach(element => {
        element.classList.remove("btn-outline-dark");
        element.classList.add("btn-outline-light");
      });
      link.forEach(element => {
        element.style.color = "var(--light)";
      });
      numberTimeline.forEach(element => {
        element.style.color = "var(--dark)";
        element.style.backgroundColor = "var(--light)";
      });
      ol.forEach(element => {
        element.style.borderLeft = "2px solid var(--light)";
      });
    }
    // End
    // En and id mode language
    const enBtn = document.querySelectorAll(".btn-en");
    const idBtn = document.querySelectorAll(".btn-id");
    const textEn = document.querySelectorAll(".text-en");
    const textId = document.querySelectorAll(".text-id");
    
    function enModeAbout(){
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
    
    function enModeResume(){
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
      aboutEn.forEach(element => {
        element.style.display = "none";
      });
      projectsEn.forEach(element => {
        element.style.display = "none";
      });
      contactEn.forEach(element => {
        element.style.display = "none";
      });
    }
    
    function enModeProjects(){
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
      aboutEn.forEach(element => {
        element.style.display = "none";
      });
      resumeEn.forEach(element => {
        element.style.display = "none";
      });
      contactEn.forEach(element => {
        element.style.display = "none";
      });
    }

    function enModeContact(){
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
      aboutEn.forEach(element => {
        element.style.display = "none";
      });
      resumeEn.forEach(element => {
        element.style.display = "none";
      });
      projectsEn.forEach(element => {
        element.style.display = "none";
      });
    }
    
    function enModeProjects(){
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
      aboutEn.forEach(element => {
        element.style.display = "none";
      });
      resumeEn.forEach(element => {
        element.style.display = "none";
      });
      contactEn.forEach(element => {
        element.style.display = "none";
      });
    }
    
    function idModeAbout(){
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
    
    function idModeResume(){
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
      aboutId.forEach(element => {
        element.style.display = "none";
      });
      projectsId.forEach(element => {
        element.style.display = "none";
      });
      contactId.forEach(element => {
        element.style.display = "none";
      });
    }

    function idModeProjects(){
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
      aboutId.forEach(element => {
        element.style.display = "none";
      });
      resumeId.forEach(element => {
        element.style.display = "none";
      });
      contactId.forEach(element => {
        element.style.display = "none";
      });
    }

    function idModeContact(){
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
      aboutId.forEach(element => {
        element.style.display = "none";
      });
      resumeId.forEach(element => {
        element.style.display = "none";
      });
      projectsId.forEach(element => {
        element.style.display = "none";
      });
    }
    // End