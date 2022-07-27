import { Route, Routes } from 'react-router-dom';
import Algorithms from '../algorithms/algorithms.component';

const Skills = () => (
    <div>
        <Routes>
            <Route index element={<Algorithms />} />
        </Routes>
    </div>
);

export default Skills;