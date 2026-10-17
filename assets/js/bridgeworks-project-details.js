(() => {
    const projects = {
        "culvert-installation": {
            title: "Culvert Installation Project",
            image: "assets/images/client-photos/nel-truck-backhoe-site.jpeg",
            gallery: ["assets/images/services/bridgeworks-s2.jpg", "assets/images/client-photos/nel-truck-backhoe-village.jpeg"],
            intro: "A practical culvert installation package supporting reliable drainage and all-weather road access.",
            overview: "The work focused on preparing the crossing, installing the culvert system and reinstating the surrounding road formation. Each stage was planned around site conditions to guide runoff safely beneath the road and protect the travelled surface.",
            features: ["Site assessment and set-out", "Excavation and formation preparation", "Culvert placement and alignment", "Headwall and outlet protection", "Backfilling and compaction", "Road surface reinstatement"],
            outcome: "The completed crossing provides a defined path for water flow while supporting safer, more dependable access through the site.",
            scope: "Culvert installation"
        },
        "drainage-channel-upgrade": {
            title: "Drainage Channel Upgrade",
            image: "assets/images/services/bridgeworks-s2.jpg",
            gallery: ["assets/images/client-photos/nel-roadside-community-01.jpeg", "assets/images/client-photos/nel-excavator-loading-01.jpeg"],
            intro: "An upgraded drainage channel designed to move runoff away from road infrastructure and adjacent work areas.",
            overview: "The works improved channel alignment and capacity while addressing the interfaces between the drain, road edge and surrounding ground. Careful grading helps direct water through the system rather than across the road corridor.",
            features: ["Drain alignment and levels", "Channel excavation", "Stable side slopes", "Controlled outlet connections", "Road-edge protection", "Final clean-up and inspection"],
            outcome: "The upgraded channel improves runoff management and helps reduce the risk of standing water and erosion around the road.",
            scope: "Drainage channel works"
        },
        "bridge-access-road-works": {
            title: "Bridge Access Road Works",
            image: "assets/images/portfolio/roadconstruction.jpg",
            gallery: ["assets/images/services/roadconstruction-s1.jpg", "assets/images/client-photos/nel-site-loader-trucks.jpeg"],
            intro: "Access road works supporting safe, practical movement to a bridge and its adjoining infrastructure.",
            overview: "The project combined earthworks, shaping and surface preparation to create a dependable approach to the bridge. Road formation and drainage were developed together to support the movement of plant, materials and local traffic.",
            features: ["Route preparation", "Earthworks and formation shaping", "Drainage integration", "Compaction of running surface", "Bridge approach tie-ins", "Site access management"],
            outcome: "The completed approach improves access to the bridge while creating a more resilient connection for road users and project traffic.",
            scope: "Access road construction"
        },
        "flood-control-works": {
            title: "Flood Control Works",
            image: "assets/images/client-photos/nel-fleet-lineup-02.jpeg",
            gallery: ["assets/images/client-photos/nel-truck-community.jpeg", "assets/images/client-photos/nel-roadside-community-02.jpeg"],
            intro: "Targeted civil works to manage surface water and protect access routes during heavy rainfall.",
            overview: "This package focused on directing runoff away from vulnerable areas through coordinated earthworks and drainage measures. Site levels, water paths and vehicle movements were considered to create practical protection for the road corridor.",
            features: ["Runoff path assessment", "Earth bund and shaping works", "Drainage improvements", "Erosion-control measures", "Access-route protection", "Post-rainfall inspection points"],
            outcome: "The works provide a stronger framework for managing surface water and maintaining access during wet conditions.",
            scope: "Flood-control civil works"
        },
        "culvert-replacement": {
            title: "Culvert Replacement",
            image: "assets/images/services/bridgeworks-s2.jpg",
            gallery: ["assets/images/client-photos/nel-truck-backhoe-site.jpeg", "assets/images/client-photos/nel-backhoe-earthworks.jpeg"],
            intro: "Replacement culvert works to restore effective drainage beneath an established road alignment.",
            overview: "The existing crossing was renewed through controlled removal, foundation preparation and installation of the replacement culvert. The surrounding formation was then rebuilt and compacted to reconnect the drainage path with the road surface above.",
            features: ["Existing crossing assessment", "Removal and excavation", "Foundation preparation", "Replacement culvert installation", "Backfill and compaction", "Inlet and outlet finishing"],
            outcome: "The renewed crossing restores drainage capacity and supports a stable road formation through the site.",
            scope: "Culvert replacement"
        },
        "community-drainage": {
            title: "Community Drainage Project",
            image: "assets/images/portfolio/roadconstruction.jpg",
            gallery: ["assets/images/client-photos/nel-roadside-community-01.jpeg", "assets/images/client-photos/nel-truck-backhoe-village.jpeg"],
            intro: "Community-focused drainage works that improve water movement around local access routes and shared spaces.",
            overview: "The project established practical drainage paths suited to local ground conditions and everyday access needs. Construction considered the relationship between the channel, roadside edges and nearby community areas to help keep runoff moving away from frequently used routes.",
            features: ["Community-area site review", "Drainage route set-out", "Excavation and shaping", "Roadside water collection", "Safe outlet provisions", "Final site restoration"],
            outcome: "The completed drainage measures help improve local access and reduce the impact of surface water around community infrastructure.",
            scope: "Community drainage works"
        }
    };

    const project = projects[new URLSearchParams(window.location.search).get("project")] || projects["culvert-installation"];
    const setText = (selector, value) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = value;
    };

    document.title = `${project.title} | Northern Ekspress Limited`;
    setText(".rs-breadcrumb-title", project.title);
    const breadcrumbItems = document.querySelectorAll(".rs-breadcrumb-menu li span");
    if (breadcrumbItems[1]) breadcrumbItems[1].textContent = "Bridgeworks";
    if (breadcrumbItems[2]) breadcrumbItems[2].textContent = project.title;

    const images = document.querySelectorAll(".rs-portfolio-details-thumb img");
    [project.image, ...project.gallery].forEach((src, index) => {
        if (images[index]) {
            images[index].src = src;
            images[index].alt = project.title;
        }
    });

    const titles = document.querySelectorAll(".rs-portfolio-details-title");
    [project.title, "Project Features", "Working Process", "Project Outcome"].forEach((text, index) => {
        if (titles[index]) titles[index].textContent = text;
    });

    const content = document.querySelector(".rs-portfolio-details-content");
    if (content) {
        const paragraphs = content.querySelectorAll(":scope > p");
        const copy = [project.intro, project.overview, "Every stage was coordinated to deliver a durable result that supports the surrounding road and drainage network.", "The work sequence prioritised clear site preparation, controlled construction and final quality checks.", "The final review confirms the completed works integrate with the surrounding road and drainage network.", project.outcome];
        copy.forEach((text, index) => {
            if (paragraphs[index]) paragraphs[index].textContent = text;
        });
    }

    setText(".rs-postbox-quote blockquote p", "“Practical civil works begin with a clear understanding of water, terrain and local access needs.”");
    setText(".rs-postbox-quote cite", "Northern Ekspress Limited");
    document.querySelectorAll(".rs-portfolio-details-feature-list li").forEach((item, index) => {
        const icon = item.querySelector("svg");
        item.textContent = project.features[index] || project.features[project.features.length - 1];
        if (icon) item.prepend(icon);
    });

    const steps = [["Site Review", "Confirm conditions, levels, access requirements and the safest work sequence."], ["Preparation", "Prepare the work area, materials and equipment for efficient construction."], ["Construction", "Complete the required earthworks, drainage and structural work with controlled placement."], ["Final Checks", "Inspect the finished works, tidy the site and confirm drainage and access performance."]];
    document.querySelectorAll(".rs-work-step-item").forEach((item, index) => {
        const step = steps[index];
        const title = item.querySelector(".rs-work-step-title");
        const description = item.querySelector(".descrip");
        if (title) title.textContent = step[0];
        if (description) description.textContent = step[1];
    });

    const info = [["Client", "Northern Ekspress Limited"], ["Service", "Bridgeworks & Drainage"], ["Project type", "Civil works portfolio"], ["Status", "Completed work"], ["Scope", project.scope], ["Location", "Papua New Guinea"]];
    setText(".widget-project > p", `Northern Ekspress Limited project profile for ${project.title}.`);
    document.querySelectorAll(".widget-project .sidebar-widget-client-item").forEach((item, index) => {
        const label = item.querySelector("span");
        const value = item.querySelector("h6");
        if (label) label.textContent = info[index][0];
        if (value) value.textContent = info[index][1];
    });
})();
