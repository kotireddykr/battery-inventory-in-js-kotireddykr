const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  const RATED_CAPACITY=120;
  
  let counts= {
    healthy: 0,
    exchange: 0,
    failed: 0
  };
  presentCapacities.forEach(capacity=>{
    const soh=(100 * capacity) / RATED_CAPACITY
    if(soh>83){
      counts.healthy++;
    }
    else if(soh>=63){
      counts.exchange++;
    }
    else {
      counts.failed++;
    }
  });
  return counts;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  const counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
