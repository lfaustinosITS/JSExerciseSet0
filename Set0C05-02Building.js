class Building {
    constructor() {
      this.floors = new Map();
  
      this.addFloor = function(floorNumber) {
        if (this.floors.has(floorNumber)) {
          console.log(`Error: Floor ${floorNumber} already exists.`);
          return;
        }
  
        this.floors.set(floorNumber, {
          rooms: new Map(),
          pastSearches: [] 
        });
  
        console.log(`Floor ${floorNumber} added.`);
      };
  
      this.addRoom = function(floorNumber, roomNumber) {
        const floor = this.floors.get(floorNumber);
        if (!floor) {
          console.log(`Error: Floor ${floorNumber} does not exist.`);
          return;
        }
  
        if (floor.rooms.has(roomNumber)) {
          console.log(`Error: Room ${roomNumber} on floor ${floorNumber} already exists.`);
          return;
        }
  
        floor.rooms.set(roomNumber, {
          equipment: new Map(), 
          users: new Map()
        });
  
        console.log(`Room ${roomNumber} on floor ${floorNumber} added.`);
      };
  
      this.addEquipment = function(floorNumber, roomNumber, equipmentName) {
        const floor = this.floors.get(floorNumber);
        if (!floor) {
          console.log(`Error: Floor ${floorNumber} does not exist.`);
          return;
        }
  
        const room = floor.rooms.get(roomNumber);
        if (!room) {
          console.log(`Error: Room ${roomNumber} on floor ${floorNumber} does not exist.`);
          return;
        }
  
        if (room.equipment.has(equipmentName)) {
          console.log(`Error: Equipment ${equipmentName} already exists in room ${roomNumber} on floor ${floorNumber}.`);
          return;
        }
  
        room.equipment.set(equipmentName, {});
  
        console.log(`Equipment ${equipmentName} added to room ${roomNumber} on floor ${floorNumber}.`);
      };
  
      this.addUser = function(floorNumber, roomNumber, username) {
        const floor = this.floors.get(floorNumber);
        if (!floor) {
          console.log(`Error: Floor ${floorNumber} does not exist.`);
          return;
        }
  
        const room = floor.rooms.get(roomNumber);
        if (!room) {
          console.log(`Error: Room ${roomNumber} on floor ${floorNumber} does not exist.`);
          return;
        }
  
        if (room.users.has(username)) {
          console.log(`Error: User ${username} already exists in room ${roomNumber} on floor ${floorNumber}.`);
          return;
        }
  
        room.users.set(username, {});
  
        console.log(`User ${username} added to room ${roomNumber} on floor ${floorNumber}.`);
      };
  
      this.findUser = function(username) {
        for (const [floorNumber, floor] of this.floors) {
          for (const [roomNumber, room] of floor.rooms) {
            if (room.users.has(username)) {
              console.log(`User ${username} found in room ${roomNumber} on floor ${floorNumber}.`);
              return;
            }
          }
        }
  
        console.log(`User ${username} not found.`);
      };
  
      this.findEquipment = function(equipmentName) {
        for (const [floorNumber, floor] of this.floors) {
          for (const [roomNumber, room] of floor.rooms) {
            if (room.equipment.has(equipmentName)) {
              console.log(`Equipment ${equipmentName} found in room ${roomNumber} on floor ${floorNumber}.`);
              return;
            }
          }
        }
  
        console.log(`Equipment ${equipmentName} not found.`);
      };
  
      this.search = function(keyword) {
        for (const [floorNumber, floor] of this.floors) {
          for (const [roomNumber, room] of floor.rooms) {
            if (room.users.has(keyword) || room.equipment.has(keyword)) {
              floor.pastSearches.push(keyword);
              console.log(`Keyword ${keyword} found in room ${roomNumber} on floor ${floorNumber}.`);
              return;
            }
          }
        }
  
        console.log(`Keyword ${keyword} not found.`);
      };
  
      this.viewPastSearches = function(floorNumber) {
        const floor = this.floors.get(floorNumber);
        if (!floor) {
          console.log(`Error: Floor ${floorNumber} does not exist.`);
          return;
        }
  
        console.log(`Past searches on floor ${floorNumber}:`);
        console.log(floor.pastSearches);
      };
    }
  }
  
  // Example usage
  const building = new Building();
  
  building.addFloor(1);
  building.addFloor(2);
  
  building.addRoom(1, 101);
  building.addRoom(1, 102);
  building.addRoom(2, 201);
  
  building.addEquipment(1, 101, "Printer");
  building.addEquipment(1, 102, "Projector");
  building.addEquipment(2, 201, "Desktop");
  
  building.addUser(1, 101, "Samuel");
  building.addUser(1, 102, "Karen");
  building.addUser(2, 201, "Leonardo");
  building.addUser(1,101,"Ivan")
  
  building.findUser("Karen");
  building.findUser("Samuel");
  building.findEquipment("Printer");
  
  building.search("Projector");
  building.search("Leonardo");
  building.viewPastSearches(1);
  