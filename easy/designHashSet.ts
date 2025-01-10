/* Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
 

Constraints:

0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.

Starter code:

class MyHashSet {
    constructor() {
        
    }

    add(key: number): void {
        
    }

    remove(key: number): void {
        
    }

    contains(key: number): boolean {
        
    }
}
*/

// Solution 1:

class MyHashSet {
  data: boolean[];
  constructor() {
    this.data = new Array(1000001).fill(false);
  }

  add(key: number): void {
    this.data[key] = true;
  }

  remove(key: number): void {
    this.data[key] = false;
  }

  contains(key: number): boolean {
    return this.data[key];
  }
}

// Solution 2:

class MyHashSet {
  data: number[];
  constructor() {
    this.data = [];
  }

  add(key: number): void {
    if (!this.data.includes(key)) {
      this.data.push(key);
    }
  }

  remove(key: number): void {
    const index = this.data.indexOf(key);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  contains(key: number): boolean {
    return this.data.includes(key);
  }
}
