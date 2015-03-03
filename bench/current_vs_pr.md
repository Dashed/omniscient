shouldComponentUpdate on no input
  ...running...    Old:   208,236   212,856   217,686 ops/sec
  New:   172,851   177,196   181,765 ops/sec
  compare: 1 1
  diff: -16.76%
  rme: 2.37%
shouldComponentUpdate when cursors are same
  ...running...    Old:    12,275    14,872    18,863 ops/sec
  New:    16,555    17,410    18,357 ops/sec
  compare: 0 0
  diff: 17.06%
  rme: 15.39%
shouldComponentUpdate when cursors are different
  ...running...    Old:     8,964     9,298     9,658 ops/sec
  New:     8,929     9,251     9,597 ops/sec
  compare: 0 0
  diff: -0.51%
  rme: 3.66%
shouldComponentUpdate when immutables are same
  ...running...    Old:    20,535    21,500    22,560 ops/sec
  New:    20,687    21,446    22,261 ops/sec
  compare: 0 0
  diff: -0.26%
  rme: 4.21%
shouldComponentUpdate when many immutables are passed as the same reference
  ...running...    Old:       263       276       290 ops/sec
  New:       271       282       294 ops/sec
  compare: 0 0
  diff: 2.28%
  rme: 4.34%
shouldComponentUpdate when large object is passed
  ...running...    Old:    15,525    15,825    16,136 ops/sec
  New:    14,856    15,382    15,946 ops/sec
  compare: 1 1
  diff: -2.8%
  rme: 2.85%
shouldComponentUpdate when two large object is passed
  ...running...    Old:     1,302     1,331     1,362 ops/sec
  New:     1,351     1,380     1,411 ops/sec
  compare: 1 1
  diff: 3.68%
  rme: 2.21%
shouldComponentUpdate when two large object is passed but as same input
  ...running...    Old:    19,235    19,610    19,999 ops/sec
  New:    19,151    19,570    20,007 ops/sec
  compare: 1 1
  diff: -0.21%
  rme: 2.07%
shouldComponentUpdate when immutables are different
  ...running...    Old:    11,307    11,740    12,208 ops/sec
  New:    11,246    11,700    12,191 ops/sec
  compare: 0 0
  diff: -0.35%
  rme: 3.93%
shouldComponentUpdate when long arrays (1000 elements) are the same
  ...running...    Old:     1,562     1,594     1,627 ops/sec
  New:     1,436     1,474     1,515 ops/sec
  compare: 1 1
  diff: -7.5%
  rme: 2.37%
shouldComponentUpdate when long arrays (1000 elements) are the same reference
  ...running...    Old:     3,158     3,240     3,326 ops/sec
  New:     3,196     3,250     3,305 ops/sec
  compare: 1 1
  diff: 0.29%
  rme: 2.18%
shouldComponentUpdate when same input is passed (long array, 1000 items)
  ...running...    Old:     3,321     3,382     3,446 ops/sec
  New:     3,226     3,320     3,419 ops/sec
  compare: 0 0
  diff: -1.86%
  rme: 2.43%
all done
