/* globals ko */
const cats = [
  {
    name: 'Teddy bear 1',
    clickCount: 0,
    imgSrc: 'https://placehold.it/400',
    imgAttr: 'asasfsaf',
    nicknames: [
      'Superman',
      'Batman',
      'Spider-man',
    ],
  },
  {
    name: 'Teddy bear 2',
    clickCount: 0,
    imgSrc: 'https://placehold.it/400x300',
    imgAttr: 'trhtytyifx',
    nicknames: [
      'Batman',
      'Spider-man',
    ],
  },
  {
    name: 'Teddy bear 3',
    clickCount: 0,
    imgSrc: 'https://placehold.it/300',
    imgAttr: 'bfgntyytm',
    nicknames: [
      'Superman',
      'Spider-man',
    ],
  },
];
class Cat {
  constructor(data = {
    name: 'Teddy bear',
    clickCount: 0,
    imgSrc: 'https://placehold.it/400',
    imgAttr: 'asasfsaf',
    nicknames: [
      'Superman',
      'Batman',
      'Spider-man',
    ],
  }) {
    console.log(data.nicknames);
    this.name = ko.observable(data.name);
    this.clickCount = ko.observable(data.clickCount);
    this.level = ko.computed(() => {
      if (this.clickCount() < 3) {
        return 'Baby';
      } if (this.clickCount() < 6) {
        return 'Kid';
      } if (this.clickCount() < 9) {
        return 'Teenager';
      } return 'Adult';
    });
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttr = ko.observable(data.imgAttr);
    this.nicknames = ko.observableArray(data.nicknames);
  }
}
class ViewModel {
  constructor() {
    this.catList = ko.observableArray([]);
    cats.forEach((data) => {
      this.catList.push(new Cat(data));
    });
    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = this.incrementCounter.bind(this);
    this.setCurrentCat = this.setCurrentCat.bind(this);
  }

  incrementCounter() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  }

  setCurrentCat(indexObservable) {
    this.currentCat(this.catList()[indexObservable()]);
  }
}

ko.applyBindings(new ViewModel());
