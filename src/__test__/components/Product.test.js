import React from 'react';
import { mount, shallow } from 'enzyme';
import ProvaiderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente', () => {
    const product = shallow(
      <ProvaiderMock>
        <Product />
      </ProvaiderMock>,
    );
    expect(product.length).toEqual(1);
  });

  test('Comprobal el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProvaiderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProvaiderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
