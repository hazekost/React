import React, {useState} from 'react';
import {Rating} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating
};

export const EmptyStars = () => <Rating value={0} setValue={() => {}}/>
export const Rating1 = () => <Rating value={1} setValue={() => {}}/>
export const Rating2 = () => <Rating value={2} setValue={() => {}}/>
export const Rating3 = () => <Rating value={3} setValue={() => {}}/>
export const Rating4 = () => <Rating value={4} setValue={() => {}}/>
export const Rating5 = () => <Rating value={5} setValue={() => {}}/>
export const ChangeRating = () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} setValue={setValue}/>
}