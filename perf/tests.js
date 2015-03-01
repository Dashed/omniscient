
var component = omniscient;
var shouldComponentUpdate = component.shouldComponentUpdate;

// Immutable.fromJS is broken for some reason
/**
var data = Immutable.fromJS({ foo: 'bar', bar: [1, 2, 3] });
console.log(Immutable.Map.isMap(data)); // => false
var foo = { foo: 'bar', bar: [1, 2, 3] };
console.log(foo === Immutable.fromJS(foo)) // => true
**/

describe('shouldComponentUpdate', function () {

  it('on no input', function () {

    shouldComponentUpdate.call({ }, { })
  });

  it('when cursors are same', function () {
    var cursor1 = Cursor.from(generateImmutable(), ['foo']);

    shouldComponentUpdate.call({
      props: { d: cursor1 },
    }, { d: cursor1 });
  });

  it('when cursors are different', function () {
    var cursor1 = Cursor.from(generateImmutable(), ['foo']);
    var cursor2 = Cursor.from(generateImmutable(), ['bar']);

    shouldComponentUpdate.call({
      props: { d: cursor1},
    }, { d: cursor2})
  });

  it('when immutables are same', function () {
    var data = generateImmutable();

    shouldComponentUpdate.call({
      props: { d: data},
    }, { d: data})
  });

  it('when many immutables are passed as the same reference', function () {
    var structures = {};
    for(var i = 0; i < 100; i++) {
      structures['data' + i] = generateImmutable();
    }

    shouldComponentUpdate.call({
      props: { d: structures},
    }, { d: structures})
  });

  it('when large object is passed', function () {
    var objects = {};
    for(var i = 0; i < 100; i++) {
      objects['data' + i] = { foo: 'bar', bar: [1, 2, 3] };
    }

    shouldComponentUpdate.call({
      props: { d: objects},
    }, { d: objects })
  });

  it('when two large object is passed', function () {
    var objects = {};
    for(var i = 0; i < 100; i++) {
      objects['data' + i] = { foo: 'bar', bar: [1, 2, 3] };
    }

    var objects2 = {};
    for(var i = 0; i < 100; i++) {
      objects2['data' + i] = { foo: 'bar', bar: [1, 2, 3] };
    }

    shouldComponentUpdate.call({
      props: { d: objects},
    }, { d: objects2 })
  });

  it('when two large object is passed but as same input', function () {
    var objects = {};
    for(var i = 0; i < 100; i++) {
      objects['data' + i] = { foo: 'bar', bar: [1, 2, 3] };
    }

    shouldComponentUpdate.call({
      props: objects,
    }, objects)
  });

  it('when immutables are different', function () {
    var data = generateImmutable();
    var data2 = generateImmutable();

    shouldComponentUpdate.call({
      props: { d: data},
    }, { d: data2 })
  });

  it('when long arrays (1000 elements) are the same', function () {
    var data = Immutable.Range(0, 1000).toJS();
    var data2 = Immutable.Range(0, 1000).toJS();

    shouldComponentUpdate.call({
      props: { d: data},
    }, { d: data2 })
  });

  it('when long arrays (1000 elements) are the same reference', function () {
    var data = Immutable.Range(0, 1000).toJS();

    shouldComponentUpdate.call({
      props: { d: data},
    }, { d: data })
  });

  it('when same input is passed (long array, 1000 items)', function () {
    var input = { d : Immutable.Range(0, 1000).toJS() };

    shouldComponentUpdate.call({
      props: input,
    }, input)
  });

});
