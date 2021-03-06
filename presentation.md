![img](http://photos2.meetupstatic.com/photos/event/1/4/8/e/global_84245262.jpeg)

## Not all Angular Data Grids are Created Equal

By Alexander Harding | http://github.com/aeharding

---

![img/adams.jpg](img/adams.jpg)

---

![img/uni.jpg](img/uni.jpg)

---

![img/ski.jpg](img/ski.jpg)

---

![img/skydive.png](img/skydive.png)

---

![img/scuba.png](img/scuba.png)

---

![img/capitol.jpg](img/capitol.jpg)

---

# This is not...

  - consuming/building a data grid
  - strictly Angular
  - strictly data grids

<small>(It's just that Angular data grids are a good example)</small>

---

# Disclaimer

I'm biased. I use [smart-table 1.x](http://ce.software.dell.com/cx/cui/api/directive/table/) in my day job [[CUI]](http://ce.software.dell.com/cx/cui).

But it took a while to get there...

---

![img](img/req1.png)

---

![img](img/req2.png)

---

# Directives

  1. `<my-directive>`
  2. `<div my-directive>`
  3. `<div class="my-directive">`

...

(4. Comments)

Note: Angular, like JS, has many ways to do the same thing

---

## Element form

#### Pros

Web Component-y

Less obfuscated HTML w/ div, span

Transclusion

#### Cons

Cannot use w/ native HTML element

Multiple directive elements on same element...

---

## Attribute

#### Pros

'value'... `<div my-directive="val">`

Multiple directives on one element

... And more, that I will get to

#### Cons

More obfuscated DOM -- need 'filler' div, span

Note: Will not talk about class, comment

---

### A deep dive into
# transclusion

---

`index.html`:
```html
<my-wicked-button></my-wicked-button>
```

`my-wicked-button.partial.html`:
```html
<button ng-transclude class="my-wicked-button"></button>
```

`my-wicked-button.js`:
```js
angular.module('app').directive('myWickedButton', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'my-wicked-button.partial.html',
    scope: {},
    link: function(scope, element, attrs) {
      console.log('intialized My WICKED BUTTON!!');
    }
  }
});
```

[Plunkr](http://plnkr.co/edit/J4gdLZDkBZqw4O3KnXgk?p=preview)

---

This works great.

For a button.

### What about more complex directives?

---

```html
<my-wicked-button hint="A hint when you hover">
  <i class="fa fa-flag"></i> BOOM
</my-wicked-button>
```

[Plunkr](http://plnkr.co/edit/89KldI8t0vNkSOLxUqVQ?p=preview)

---

```html
<my-wicked-button hint="&lt;i class=&quot;fa fa-flag&quot;&gt;&lt;/i&gt; A hint when you hover">
  <i class="fa fa-flag"></i> BOOM
</my-wicked-button>
```
[Plunkr](http://plnkr.co/edit/0hSlmtQz85juJXekIu1P?p=preview)

---

```html
<my-wicked-button hint="A hint when you hover" hint-icon="flag">
  <i class="fa fa-flag"></i> BOOM
</my-wicked-button>
```
[Plunkr](http://plnkr.co/edit/TzY4qQsiVxqetvDAMc0u?p=preview)

---

# Multi transclusion

https://github.com/angular/angular.js/issues/4357 (2013-present)

https://github.com/zachsnow/ng-multi-transclude

---

![Wat](img/youpeople.gif)

## Hold on...

---

```html
<my-wicked-button>
  <div name="hint">
    <i class="fa fa-flag"></i> A hint when you hover
  </div>
  <div name="main">
    <i class="fa fa-flag"></i> BOOM
  </div>
</my-wicked-button>
```

<small>
  [[Plunkr]](http://plnkr.co/edit/Lusx0nkxO0E8vhF8ZXSd?p=preview)
</small>


vs.


```html
<button my-wicked-button>
  <i class="fa fa-flag"></i> BOOM

  <my-wicked-hint>
    <i class="fa fa-flag"></i> A hint when you hover
  </my-wicked-hint>
</button>
```

<small>
  [[Plunkr]](http://plnkr.co/edit/MzNsIqh5mnA5xV7HoNKV?p=preview)
</small>

Incrementally add attribute directives as needed

---

## Pros

Incremental enhancement

Use what you need -- not The Kitchen Sink(tm)

## Cons

A little less magic

---

Well, duh.

---

However...

Some Angular devs didn't get the memo.

![img](img/ert.gif)

<small>Polymer... Well designed, thought out for usability... But very strict styling rules.</small>

---

## Configuration
#### vs.
## Declaration

---

## Configration

```html
<my-alerts val="alertsArr"></my-alerts>
```

```js
$scope.alertsArr = [{
  type: 'danger',
  message: 'You failed to do something',
  onResolve: function() {
    console.log('closed by the user');
  }
}];
```

[Plunker](http://plnkr.co/edit/ckWoboRczYRIdy8gUP2d?p=preview)

---

## Declaration

```html
<div ng-repeat="alert in alertsArr"
     class="alert alert-type-{{alert.type}}"
     on-resolve="alert.onResolve()">
  {{alert.message}}
</div>
```

```js
$scope.alertsArr = [{
  type: 'danger',
  message: 'You failed to do something',
  onResolve: function() {
    console.log('closed by the user');
  }
}];
```

[Plunker](http://plnkr.co/edit/Gsbgjy1dqn4BTxyltTXG?p=preview)

---

#### Let's talk about
# Data Grids

---

# Look at the usage

---

# [ng-grid](http://angular-ui.github.io/ng-grid/)

<small>(outdated, but was very popular) | requires jQuery</small>

[remote paging](http://plnkr.co/edit/50vJrs?p=preview)

```html
<div class="gridStyle" ng-grid="gridOptions">
```

```js
$scope.myData = [{name: "Moroni", age: 50},
                 {name: "Tiancum", age: 43},
                 {name: "Jacob", age: 27},
                 {name: "Nephi", age: 29},
                 {name: "Enos", age: 34}];
```

[The API Documentation](http://angular-ui.github.io/ng-grid/#api)

---

# [ui-grid](http://ui-grid.info/)

<small>(in beta) | Angular sole dependency | high performance | 'plugin architecture'</small>

... No remote data. Load once. [...ish](http://ui-grid.info/docs/#/tutorial/112_swapping_data)

```html
<div ui-grid="{ data: myData }" class="myGrid"></div>
```

```js
$scope.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney"...
```

---

# [smart-table 0.2.x](http://aeharding.github.io/smart-table-website)

<small>(outdated) | Angular sole dependency</small>

```html
<smart-table rows="rowCollection"></smart-table>
```

```js
scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
```

---

![ig](img/pelting.png)

## This isn't Angular

---

![img](img/sand.jpg)

---

# [ng-table](http://ng-table.com)

<small>(stable) | sole Angular dependency</small>

```html
<table ng-table="tableParams" class="table">
    <tbody>
        <tr ng-repeat="user in $data">
            <td data-title="'Name'">
                {{user.name}}
            </td>
            <td data-title="'Age'">
                {{user.age}}
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td class="text-success text-right"><strong>Summary:</strong></td>
            <td>{{sum}}</td>
        </tr>
    </tfoot>
</table>
```

[example](http://codepen.io/christianacca/pen/jPxgzY?editors=101)

---

# [smart-table 1.x](http://lorenzofox3.github.io/smart-table-website)

```html
<table st-table="rowCollection" class="table table-striped">
    <thead>
    <tr>
        <th>first name</th>
        <th>last name</th>
        <th>birth date</th>
        <th>balance</th>
        <th>email</th>
    </tr>
    </thead>
    <tbody>
    <tr ng-repeat="row in rowCollection">
        <td>{{row.firstName}}</td>
        <td>{{row.lastName}}</td>
        <td>{{row.birthDate}}</td>
        <td>{{row.balance}}</td>
        <td>{{row.email}}</td>
    </tr>
    </tbody>
</table>
```

```js
scope.rowCollection = [
    {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
    {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
    {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
];
```

---

# Look at the source

[ng-grid pagination.js](https://github.com/angular-ui/ng-grid/blob/e8fe073/src/features/pagination/js/pagination.js)

[ng-table header.html](https://github.com/esvit/ng-table/blob/master/src/ng-table/header.html)

[smart-table stPagination.js](https://github.com/lorenzofox3/Smart-Table/blob/master/src/stPagination.js)

---

# Take away

Just because it claims it 'uses Angular', doesn't mean that helps YOU during when consuming it

<br><br>
<small>
Shoutout:
<br>Docker rocks my world. Talk to me about it afterwards.
</small>
---