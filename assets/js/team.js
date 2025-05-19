document.addEventListener("DOMContentLoaded", function() {
    const members_query = [
        "helena",
        "athina",
        "dylan",
        "yusuf",
        "amine"
    ];

    const members = new Map();
    members_query.forEach(member => {
        members.set(member, document.getElementById(`${member}-desc`));
    });

    document.querySelectorAll(".members .col").forEach(member => {
        member.addEventListener("click", function() {
            const modal = members.get(member.id);
            if (modal) {
                modal.style.display = "flex";
            }
        });
    });

    document.querySelectorAll(".member-desc").forEach(modal => {
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});