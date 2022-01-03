import styled from "styled-components";
const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-soze: 22px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;
export default function TodoHeader({ todoList }) {
    const undoneTasks = todoList.filter(todo => !todo.idDone );
    // 날짜구현
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    const dayName = today.toLocaleDateString('ko-KR', { 
        weekday: 'long' 
    });
    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할일 : {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}