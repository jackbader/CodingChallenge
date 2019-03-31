/*****************************************************************************************
 * Part 2
 ****************************************************************************************/
var employees = [
  { first: 'Amanda', last: 'Byron', group: 'Sales' },
  { first: 'Ye', last: 'Xia', group: 'Receiving', nameOrder: 'reverse' },
  { first: 'Miltiades', last: 'Crescens', group: 'Sales' },
  /*...don't foget to account for other entries of the same form, but with different group names.....*/
];

// Part 2 Answer Here

function organizeByGroup() {
  const groupedEmployees = {};
  employees.forEach(employee => {
    const name = {
      name:
        employee.nameOrder === 'reverse'
          ? `${employee.last} ${employee.first}`
          : `${employee.first} ${employee.last}`,
    };
    if (groupedEmployees[employee.group]) {
      groupedEmployees[employee.group].push(name);
    } else {
      groupedEmployees[employee.group] = [name];
    }
  });

  return groupedEmployees;
}

console.log(organizeByGroup(employees));

/*****************************************************************************************
 * Bonus
 ****************************************************************************************/

// Bonus Anwser Here
