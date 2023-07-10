class Building {
  constructor() {
    this.floors = new Map();
    this.searchCache = new Map();

    this.addFloor = function (floorNumber) {
      if (this.floors.has(floorNumber)) {
        console.error(`Error: Floor ${floorNumber} already exists.`);
        return;
      }

      this.floors.set(floorNumber, {
        rooms: new Map(),
      });

      console.log(`Floor ${floorNumber} added.`);
    };

    this.addRoom = function (floorNumber, roomNumber) {
      const floor = this.floors.get(floorNumber);
      if (!floor) {
        console.error(`Error: Floor ${floorNumber} does not exist.`);
        return;
      }

      if (floor.rooms.has(roomNumber)) {
        console.error(`Error: Room ${roomNumber} on floor ${floorNumber} already exists.`);
        return;
      }

      floor.rooms.set(roomNumber, {
        equipment: new Map(),
        users: new Map()
      });

      console.log(`Room ${roomNumber} on floor ${floorNumber} added.`);
    };

    this.addEquipment = function (floorNumber, roomNumber, equipmentName) {
      const floor = this.floors.get(floorNumber);
      if (!floor) {
        console.error(`Error: Floor ${floorNumber} does not exist.`);
        return;
      }

      const room = floor.rooms.get(roomNumber);
      if (!room) {
        console.error(`Error: Room ${roomNumber} on floor ${floorNumber} does not exist.`);
        return;
      }

      if (room.equipment.has(equipmentName)) {
        console.error(`Error: Equipment ${equipmentName} already exists in room ${roomNumber} on floor ${floorNumber}.`);
        return;
      }

      room.equipment.set(equipmentName, {});

      console.log(`Equipment ${equipmentName} added to room ${roomNumber} on floor ${floorNumber}.`);
    };

    this.addUser = function (floorNumber, roomNumber, username) {
      const floor = this.floors.get(floorNumber);
      if (!floor) {
        console.error(`Error: Floor ${floorNumber} does not exist.`);
        return;
      }

      const room = floor.rooms.get(roomNumber);
      if (!room) {
        console.error(`Error: Room ${roomNumber} on floor ${floorNumber} does not exist.`);
        return;
      }

      if (room.users.has(username)) {
        console.error(`Error: User ${username} already exists in room ${roomNumber} on floor ${floorNumber}.`);
        return;
      }

      room.users.set(username, {});

      console.log(`User ${username} added to room ${roomNumber} on floor ${floorNumber}.`);
    };

    this.findUser = function (username) {
      if (this.searchCache.has(username)) {
        const { floorNumber, roomNumber } = this.searchCache.get(username);
        return {room:roomNumber, floor: floorNumber};
      }
      for (const [floorNumber, floor] of this.floors) {
        for (const [roomNumber, room] of floor.rooms) {
          if (room.users.has(username)) {
            this.searchCache.set(username, { floorNumber, roomNumber });
            return {room: roomNumber, floor: floorNumber};
          }
        }
      }

      console.error(`User ${username} not found.`);
    };

    this.findEquipment = function (equipmentName) {
      if (this.searchCache.has(equipmentName)) {
        const { floorNumber, roomNumber } = this.searchCache.get(equipmentName);
        return {room: roomNumber, floor: floorNumber};
      }
      for (const [floorNumber, floor] of this.floors) {
        for (const [roomNumber, room] of floor.rooms) {
          if (room.equipment.has(equipmentName)) {
            this.searchCache.set(equipmentName, { floorNumber, roomNumber });
            return {room: roomNumber,floor: floorNumber};
          }
        }
      }

      console.error(`Equipment ${equipmentName} not found.`);
    };

    this.search = function (keyword) {
      if (this.searchCache.has(keyword)) {
        const { floorNumber, roomNumber } = this.searchCache.get(keyword);
        return {room: roomNumber, floor:floorNumber};
      }
      for (const [floorNumber, floor] of this.floors) {
        for (const [roomNumber, room] of floor.rooms) {
          if (room.users.has(keyword) || room.equipment.has(keyword)) {
            this.searchCache.set(keyword, { floorNumber, roomNumber });
            return {room: roomNumber, floor: floorNumber};
          }
        }
      }

      console.log(`Keyword ${keyword} not found.`);
    };

    this.viewPastSearches = function() {
      console.log("Search cache:");
      this.searchCache.forEach((value, key) => {
        console.log(`Keyword: ${key}, Room: ${value.roomNumber}, Floor: ${value.floorNumber}`);
      });
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
building.addUser(1, 101, "Ivan");

console.log(building.findUser("Karen"));
console.log(building.findUser("Samuel"));
console.log(building.findEquipment("Printer"));
console.log(building.search("Projector"));
console.log(building.search("Leonardo"));

building.viewPastSearches(); 
