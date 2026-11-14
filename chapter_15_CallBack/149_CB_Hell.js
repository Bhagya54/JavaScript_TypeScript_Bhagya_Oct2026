//Real QA scenario: 22 dependent steps, each async -> Pyramid of Doom
//Helper keeps functions short; the nesting below is the point.
function step(n, msg, callback) {
    setTimeout(function () {
        console.log("Step " + n + ": " + msg)
        callback();
    }, 300);
}

//This is callBack hell (Pyramid of Doom): 22 levels deep, code drifts right
step(1, "Opening chrome browser", function () {
    step(2, "Maximized browser window", function () {
        step(3, "Navigated to app.vwo.com", function () {
            step(4, "Login page loaded", function () {
                step(5, "Entered username", function () {
                    step(6, "Entered password", function () {
                        step(7, "Clicked on Login", function () {
                            step(8, "Dashboard verified", function () {
                                step(9, "Opened Campaigns menu", function () {
                                    step(10, "Clicked Create Campaign", function () {
                                        step(11, "Entered campaign name", function () {
                                            step(12, "Selected campaign type", function () {
                                                step(13, "Set target URL", function () {
                                                    step(14, "Configured goals", function () {
                                                        step(15, "Added variation", function () {
                                                            step(16, "Saved campaign", function () {
                                                                step(17, "Campaign verified in list", function () {
                                                                    step(18, "Opened Reports", function () {
                                                                        step(19, "Downloaded report", function () {
                                                                            step(20, "Verified report download", function () {
                                                                                step(21, "Opened profile menu", function () {
                                                                                    step(22, "Clicked Logout", function () {
                                                                                        console.log("Test Complete")
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
