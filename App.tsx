// React CDN을 사용하는 경우, React 라이브러리는 전역 변수인 React에 할당
const { useState, useEffect } = React;

const App = () => {
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    }, []);

    return (
        <>
            <p>Hello World React</p>
            <p>Current Time: {currentTime.toLocaleTimeString()}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}
