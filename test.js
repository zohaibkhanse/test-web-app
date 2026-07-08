console.log("🤖 Starting automated tests...");

const assert = require('assert');

try {
    // A simple assertion that will always pass
    assert.strictEqual(1 + 1, 2);
    console.log("✅ Success: All unit tests passed!");
    process.exit(0); 
} catch (error) {
    console.error("❌ Test failed:", error);
    process.exit(1); // A non-zero exit code tells Jenkins the build failed
}