document.addEventListener("DOMContentLoaded", function() {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://agent.d-id.com/v1/index.js";
    script.setAttribute("data-name", "did-agent");
    script.setAttribute("data-mode", "fabio");
    script.setAttribute("data-client-key", "Z29vZ2xlLW9hdXRoMnwxMDczMDg5MjE3MDg3NjIwODk1NTQ6cGI3Z1lzd3Y4T3FrcjNJb3FQM19Z");
    script.setAttribute("data-agent-id", "agt_I5dmOb_6");
    script.setAttribute("data-monitor", "true");

    document.getElementById("agent-container").appendChild(script);
});
