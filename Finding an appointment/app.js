
// Find the earliest time, when every businessperson is free for at least a given duration.

// Example Schedule:

// Person | Meetings
//  -------+-----------------------------------------------------------
//       A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
//       B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
//       C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00 
// The schedule will be provided as 3-dimensional array. The schedule above would be encoded this way:

// [
//  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'],
//  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
//  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]

const solution = (arg) => {
    let result = [];
    for(const a of arg.split(',')) result.push([a]);
}

solution('09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00');