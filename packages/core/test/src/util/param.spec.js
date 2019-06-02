import {param} from '../../../src/util/param';

describe('param', function() {
  it('should parse object to query params', function() {
    let obj = {
      a: 'literal',
      obj: {
        b: 'canon-literal',
        canon_array: [1, 2]
      },
      array: ['c', 3, {d: 4}]
    };
    let query_params_str = param(obj);
    let query_params_arr = decodeURIComponent(query_params_str).split('&');
    query_params_arr[0].should.equal('a=literal');
    query_params_arr[1].should.equal('obj:b=canon-literal');
    query_params_arr[2].should.equal('obj:canon_array:=1');
    query_params_arr[3].should.equal('obj:canon_array:=2');
    query_params_arr[4].should.equal('array:=c');
    query_params_arr[5].should.equal('array:=3');
    query_params_arr[6].should.equal('array:2:d=4');
  });
});
