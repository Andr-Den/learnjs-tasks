let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list1) {
  let tmp = list1;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

printList(list1);


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert(list.value);
  if (list.next) {
    printList(list.next);
  }

}

printList(list);