import React from 'react';
import { Button } from '../components';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Default = () => (
    <Button>Default</Button>
);

export const Secondary = () => (
    <Button color={'secondary'}>Secondary</Button>
);

export const Disabled = () => (
    <Button disabled>Disabled</Button>
);
