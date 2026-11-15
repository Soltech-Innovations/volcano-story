// ================================
// Scene 1: Calm Volcano Landscape
// ================================
function drawScene1() {
    clear(); // Clear the previous scene.

    // Draw a layered sky with a gradient effect.
    for (let counter = 0; counter < getHeight(); counter += 40) {
        let skyLayer = new Rectangle(getWidth(), 40); // Each layer is 40 pixels tall.
        skyLayer.setPosition(0, counter);
        skyLayer.setColor(new Color(255 - counter / 2, 180 - counter / 4, 120 + counter / 6));
        add(skyLayer);
    }

    // Draw sun.
    let sun = new Circle(50);
    sun.setPosition(getWidth() / 2, 120);
    sun.setColor(Color.yellow);
    add(sun);

    // Add clouds using the helper function.
    addCloud(100, 80);
    addCloud(300, 60);

    // Draw volcano.
    let volcano = new Polygon();
    volcano.addPoint(getWidth() / 2 - 100, getHeight() - 180);
    volcano.addPoint(getWidth() / 2 + 100, getHeight() - 180);
    volcano.addPoint(getWidth() / 2, getHeight() - 360);
    volcano.setColor(new Color(120, 70, 40));
    add(volcano);

    // Draw a river at the bottom.
    let river = new Rectangle(getWidth(), 80);
    river.setPosition(0, getHeight() - 100);
    river.setColor(new Color(0, 120, 255));
    add(river);

    // Draws a grass layer above ground.
    let grass = new Rectangle(getWidth(), 80);
    grass.setPosition(0, getHeight() - 180);
    grass.setColor(new Color(0, 180, 0));
    add(grass);

    // Draw the ground layer at the bottom.
    let ground = new Rectangle(getWidth(), 40);
    ground.setPosition(0, getHeight() - 40);
    ground.setColor(new Color(180, 120, 80));
    add(ground);

    // Adds a scene title.
    let text = new Text("Scene 1: The Calm Before the Storm");
    text.setFont("18pt Arial");
    text.setColor(Color.white);
    text.setPosition(getWidth() / 2 - text.getWidth() / 2, 30);
    add(text);
}

// ================================
// Scene 2: Foreshadowing Chaos
// ================================
function drawScene2() {
    clear(); // Clear the previous scene.

    // Black background.
    let blackScreen = new Rectangle(getWidth(), getHeight());
    blackScreen.setColor(Color.black);
    add(blackScreen);

    // Main phrase text.
    let phrase = new Text("Let Destruction Begin");
    phrase.setFont("22pt Impact");
    phrase.setColor(new Color(180, 0, 0));
    phrase.setPosition(getWidth() / 2 - phrase.getWidth() / 2, getHeight() / 2 - 30);
    add(phrase);

    // Subtext text.
    let subtext = new Text("The volcano stirs quietly...");
    subtext.setFont("16pt Courier New");
    subtext.setColor(new Color(255, 80, 80));
    subtext.setPosition(getWidth() / 2 - subtext.getWidth() / 2, getHeight() / 2 + 40);
    add(subtext);
}

// ================================
// Scene 3: Volcano Awakens
// ================================
function drawScene3() {
    clear(); // Clear the previous scene.

    // Dark sky.
    let sky = new Rectangle(getWidth(), getHeight());
    sky.setColor(new Color(70, 20, 20));
    add(sky);

    // River and grass layers.
    let river = new Rectangle(getWidth(), 80);
    river.setPosition(0, getHeight() - 100);
    river.setColor(new Color(0, 70, 150));
    add(river);

    let grass = new Rectangle(getWidth(), 80);
    grass.setPosition(0, getHeight() - 180);
    grass.setColor(new Color(20, 100, 20));
    add(grass);

    // Ground layer.
    let ground = new Rectangle(getWidth(), 40);
    ground.setPosition(0, getHeight() - 40);
    ground.setColor(new Color(150, 90, 60));
    add(ground);

    // Volcano polygon.
    let volcano = new Polygon();
    volcano.addPoint(getWidth() / 2 - 100, getHeight() - 180);
    volcano.addPoint(getWidth() / 2 + 100, getHeight() - 180);
    volcano.addPoint(getWidth() / 2, getHeight() - 360);
    volcano.setColor(new Color(100, 50, 30));
    add(volcano);

    // Volcano glow.
    let glow = new Circle(40);
    glow.setPosition(getWidth() / 2, getHeight() - 370);
    glow.setColor(new Color(255, 100, 0));
    add(glow);

    // Smoke circles rising.
    for (let counter = 0; counter < 4; counter++) {
        let smoke = new Circle(35 + counter * 5);
        smoke.setPosition(getWidth() / 2 + (Math.random() * 50 - 25), getHeight() - 420 - counter * 40);
        smoke.setColor(new Color(80, 80, 80));
        add(smoke);
    }

    // Scene title.
    let text = new Text("Scene 3: The Awakening");
    text.setFont("20pt Arial");
    text.setColor(Color.white);
    text.setPosition(getWidth() / 2 - text.getWidth() / 2, 40);
    add(text);
}

// ================================
// Scene 4: Full Volcanic Chaos
// ================================
function drawScene4() {
    clear(); // Clear the previous scene.

    // Fiery sky.
    let sky = new Rectangle(getWidth(), getHeight());
    sky.setColor(new Color(255, 70, 0));
    add(sky);

    // Lava layer on the ground.
    let lavaGround = new Rectangle(getWidth(), 120);
    lavaGround.setPosition(0, getHeight() - 120);
    lavaGround.setColor(new Color(255, 100, 0));
    add(lavaGround);

    // Volcano.
    let volcano = new Polygon();
    volcano.addPoint(getWidth() / 2 - 100, getHeight() - 120);
    volcano.addPoint(getWidth() / 2 + 100, getHeight() - 120);
    volcano.addPoint(getWidth() / 2, getHeight() - 360);
    volcano.setColor(new Color(80, 30, 20));
    add(volcano);

    // Lava flows as rectangles.
    for (let counter = 0; counter < 6; counter++) {
        let flow = new Rectangle(15, 120);
        flow.setPosition(getWidth() / 2 - 45 + counter * 20, getHeight() - 240);
        flow.setColor(new Color(255, 50 + counter * 30, 0));
        add(flow);
    }

    // Random flames.
    for (let counter = 0; counter < 15; counter++) {
        let flame = new Polygon();
        let input = Math.random() * getWidth();
        let response = getHeight() - (Math.random() * 180 + 40);
        flame.addPoint(input, response);
        flame.addPoint(input + 10, response - 30);
        flame.addPoint(input + 20, response);
        flame.setColor(new Color(255, 180, 0));
        add(flame);
    }

    // Scene title.
    let text = new Text("Scene 4: CHAOS REIGNS");
    text.setFont("28pt Impact");
    text.setColor(Color.black);
    text.setPosition(getWidth() / 2 - text.getWidth() / 2, 50);
    add(text);
}

// ================================
// Helper Function: Add Clouds
// ================================
function addCloud(input, response) {
    let c1 = new Circle(20); 
    c1.setPosition(input, response); 
    c1.setColor(Color.white);

    let c2 = new Circle(25); 
    c2.setPosition(input + 25, response - 5); 
    c2.setColor(Color.white);

    let c3 = new Circle(20); 
    c3.setPosition(input + 50, response); 
    c3.setColor(Color.white);

    add(c1); add(c2); add(c3);
}

// ================================
// Scene Control Variables
// ================================
let sceneCounter = 0; // Tracks the current scene number.

// ================================
// Start Function
// ================================
function start() {
    let welcome = new Text("Click to Begin!");
    welcome.setFont("24pt Arial");
    welcome.setColor(Color.black);
    welcome.setPosition(getWidth() / 2 - welcome.getWidth() / 2, getHeight() / 2);
    add(welcome);

    // Sets up the mouse click function to move to the next scene.
    mouseClickMethod(drawNextScene);
}

// ================================
// Draw Next Scene Function
// ================================
function drawNextScene() {
    sceneCounter++; // Increments scene number.

    // Calls an appropriate scene based on the counter.
    if (sceneCounter == 1) {
        drawScene1();
    } else if (sceneCounter == 2) {
        drawScene2();
    } else if (sceneCounter == 3) {
        drawScene3();
    } else {
        drawScene4();
    }
}
