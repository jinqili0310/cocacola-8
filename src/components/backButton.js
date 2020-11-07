/*
 * @Author: Jinqi Li
 * @Date: 2020-08-26 16:08:32
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-11-06 21:13:29
 * @FilePath: /cocacola-8/src/components/backButton.js
 */
import React, { Component } from 'react';
import leftArrow from '../assets/images/left-arrow-triangle.png';

class BackButton extends Component {
    render() { 
        return ( 
            <a href="/cocacola-8/#/products/coca-cola" className="back-link">
                <img alt="back to products" className="back-arrow" src={leftArrow}></img>
                BACK TO PRODUCTS
            </a>
         );
    }
}
 
export default BackButton;