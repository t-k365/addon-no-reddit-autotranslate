chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{
        id: 1,
        priority: 1,
        action: {
            type: "redirect",
            redirect: {
                transform: {
                    queryTransform: {
                        removeParams: ["tl"]
                    }
                }
            }
        },
        condition: {
            urlFilter: "||reddit.com",
            resourceTypes: ["main_frame"]
        }
    }]
});
