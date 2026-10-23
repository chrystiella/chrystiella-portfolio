/*
CS 146 - Assignment 1 HTML Grader

How to use:
1. Place this file in the same directory as your HTML file (ex: index.html).
2. Add the following line to the bottom of the HTML file, just before the closing </body> tag:

        <script src="html-grader.js"></script>

3. Open your page using Live Server.
4. Open your browser's developer tools (Usually right-click -> Inspect or F12)
5. Refresh the page and check the console tab to see your grading results!

Important Notes about HTML, Browsers, and Live Server:
- Web browsers do not display your HTML exactly as written. Before rendering the page, most modern
  browsers automatically add or repair certain elements (such as <html>, <head>, or <body>) so
  that the page can be displayed correctly.
- Because of this, the HTML shown in the “Elements” or “Inspect” tab represents the rendered page
  structure (DOM), not a direct copy of your original source file.
- This grader primarily checks the rendered page structure, since that reflects how the browser
  interprets your HTML when it runs.
- If you are using Live Server, additional helper code may be temporarily injected to support live
  reloading. This does not change your actual submission files.
*/

(async () => {
    console.log("HTML Grader loaded successfully. :)");
    console.log("");
    console.log("-----Grading Criteria-----");

    // Scoring
    let earned = 0;


    console.log("1.");
    // 1a. <!DOCTYPE html> present (5 points)
    if (document.doctype && (document.doctype.name === "html")) {
        console.log("\ta. <!DOCTYPE html> present: [5/5]");
        earned += 5;
    } else {
        console.log("\ta. <!DOCTYPE html> not present: [0/5] !!!");
    }

    // 1b. <head> and </head> present (2.5 points)
    // 1c. <html> and </html> present (2.5 points)
    await fetch(window.location.href)
        .then(response => response.text())
        .then(rawHtml => {
            if (rawHtml.includes("<head") && rawHtml.includes("</head>")) {
                console.log("\tb. <head> and </head> present: [2.5/2.5]");
                earned += 2.5;
            } else {
                console.log("\tb. <head> and </head> not present: [0/2.5] !!!");
            }

            if (rawHtml.includes("<html") && rawHtml.includes("</html>")) {
                console.log("\tc. <html> and </html> present: [2.5/2.5]");
                earned += 2.5;
            } else {
                console.log("\tc. <html> and </html> not present: [0/2.5] !!!");
            }
        })
        .catch(error => {
            console.warn("Error reading HTML source:", error);
        });

    // 1d. <title> present (5 points)
    let title = document.querySelector("title")
    if (title && (title.textContent.trim().length > 5)) {
        console.log("\td. <title> present: [5/5]");
        earned += 5;
    } else {
        console.log("\td. <title> present: [0/5] !!!");
    }


    console.log("2.");
    // 2a. exactly 1 <h1> (5 points)
    let h1Count = document.querySelectorAll("h1").length;
    if (h1Count === 1) {
        console.log("\ta. exactly 1 <h1>: [5/5]");
        earned += 5;
    } else {
        console.log("\ta. exactly 1 <h1>: [0/5] !!!");
    }

    // 2b. Meaningful heading in <h1> (5 points)
    const h1 = document.querySelector("h1");
    if (h1 && ((h1.textContent.trim().length > 15) || (h1.textContent.split(/\s+/).length >= 2))) {
        console.log("\tb. meaningful heading in <h1>: [5/5]");
        earned += 5;
    } else {
        console.log("\tb. meaningful heading in <h1>: [0/5] !!!");
    }


    console.log("3.");
    // 3a. div #bio section present (5 points)
    let bioDiv = document.querySelector("#bio");
    if (bioDiv && bioDiv.tagName === "DIV") {
        console.log("\ta. div #bio section present: [5/5]");
        earned += 5;
    } else {
        console.log("\ta. div #bio section present: [0/5] !!!");
    }

    // 3b. div #hobbies section present (5 points)
    // ensure that it is a div and has id="hobbies"
    let hobbiesDiv = document.querySelector("#hobbies");
    if (hobbiesDiv && hobbiesDiv.tagName === "DIV") {
        console.log("\tb. div #hobbies section present: [5/5]");
        earned += 5;
    } else {
        console.log("\tb. div #hobbies section present: [0/5] !!!");
    }

    // 3c. div #achievements section present (5 points)
    let achievementsDiv = document.querySelector("#achievements");
    if (achievementsDiv && achievementsDiv.tagName === "DIV") {
        console.log("\tc. div #achievements section present: [5/5]");
        earned += 5;
    } else {
        console.log("\tc. div #achievements section present: [0/5] !!!");
    }


    console.log("4.");
    // 4a. <h2> for bio section (5 points)
    if (bioDiv && bioDiv.querySelector("h2")) {
        console.log("\ta. <h2> for bio section: [5/5]");
        earned += 5;
    } else {
        console.log("\ta. <h2> for bio section: [0/5] !!!");
    }

    // 4b. <p> for bio section (5 points)
    if (bioDiv && bioDiv.querySelector("p")) {
        console.log("\tb. <p> for bio section: [5/5]");
        earned += 5;
    } else {
        console.log("\tb. <p> for bio section: [0/5] !!!");
    }

    // 4c. bio section has at least 40 words (5 points)
    if (bioDiv) {
        const bioText = bioDiv.querySelector("p").textContent.trim();
        const bioWordCount = bioText.split(/\s+/).length;
        if (bioWordCount >= 40) {
            console.log("\tc. bio section has at least 40 words: [5/5]");
            earned += 5;
        } else {
            console.log("\tc. bio section has at least 40 words: [0/5] !!!");
        }
    } else {
        console.log("\tc. bio section has at least 40 words: [0/5] !!!");
    }


    console.log("5.");
    // 5a. hobbies section
    if (hobbiesDiv && hobbiesDiv.querySelector("h2")) {
        console.log("\ta. <h2> for hobbies section: [5/5]");
        earned += 5;
    } else {
        console.log("\ta. <h2> for hobbies section: [0/5] !!!");
    }

    // 5b. hobbies section has <ul> or <ol> (5 points)
    if (hobbiesDiv && (hobbiesDiv.querySelector("ul") || hobbiesDiv.querySelector("ol"))) {
        console.log("\tb. hobbies section has <ul> or <ol>: [5/5]");
        earned += 5;
    } else {
        console.log("\tb. hobbies section has <ul> or <ol>: [0/5] !!!");
    }

    // 5c. hobbies section has at least 3 list items (5 points)
    if (hobbiesDiv) {
        const hobbyItems = hobbiesDiv.querySelectorAll("ul li, ol li");
        if (hobbyItems.length >= 3) {
            console.log("\tc. hobbies section has at least 3 list items: [5/5]");
            earned += 5;
        } else {
            console.log("\tc. hobbies section has at least 3 list items: [0/5] !!!");
        }
    } else {
        console.log("\tc. hobbies section has at least 3 list items: [0/5] !!!");
    }


    console.log("6.");
    // 6a. achievements section has <h2> (5 points)
    if (achievementsDiv && achievementsDiv.querySelector("h2")) {
        console.log("\ta. <h2> for achievements section: [5/5]");
        earned += 5;
    } else {
        console.log("\ta. <h2> for achievements section: [0/5] !!!");
    }

    // 6b. achievements section meets structure requirements (5 points)
    if (achievementsDiv) {
        const achievementPs = achievementsDiv.querySelectorAll("p").length;
        const achievementLis = achievementsDiv.querySelectorAll("ul li, ol li").length;
        if (achievementPs >= 2 || achievementLis >= 3) {
            console.log("\tb. achievements section meets structure requirements: [5/5]");
            earned += 5;
        } else {
            console.log("\tb. achievements section meets structure requirements: [0/5] !!!");
        }
    } else {
        console.log("\tb. achievements section meets structure requirements: [0/5] !!!");
    }

    // 6c. word count in achievements section (5 points)
    if (achievementsDiv) {
        const achievementText = achievementsDiv.textContent.trim();
        const achievementWordCount = achievementText.split(/\s+/).length;
        if (achievementWordCount >= 40) {
            console.log("\tc. achievements section has at least 40 words: [5/5]");
            earned += 5;
        } else {
            console.log("\tc. achievements section has at least 40 words: [0/5] !!!");
        }
    } else {
        console.log("\tc. achievements section has at least 40 words: [0/5] !!!");
    }


    console.log("7.");
    // 7a. at least 1 hyperlink (7.5 points)
    if (document.querySelector("a[href]")) {
        console.log("\ta. at least 1 hyperlink: [7.5/7.5]");
        earned += 7.5;
    } else {
        console.log("\ta. at least 1 hyperlink: [0/7.5] !!!");
    }

    // 7b. at least 1 image with alt text (7.5 points)
    const images = document.querySelectorAll("img");
    if(images.length > 0) {
        if(images[0].getAttribute("alt").trim().length >= 5) {
            console.log("\tb. at least 1 image with alt text: [7.5/7.5]");
            earned += 7.5;
        } else {
            console.log("\tb. at least 1 image with alt text: [0/7.5] !!!");
        }
    } else {
        console.log("\tb. at least 1 image with alt text: [0/7.5] !!!");
    }


    // Printing Results
    console.log("");
    console.log("-----Grading Results-----");
    console.log(`${earned} / 100 points earned.`);
    console.log(`Canvas grade: ${(earned / 20)} / 5 points.`);

})();
