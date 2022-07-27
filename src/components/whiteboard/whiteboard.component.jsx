import './whiteboard.styles.scss';

const Whiteboard = ({ title, children }) => {
    return (
        <div className='whiteboard-container'>
            <h2 className='heading'>{ title }</h2>
            <section className='content'>
                { children }
            </section>
        </div>
    );
};

export default Whiteboard;