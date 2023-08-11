import Concept from "../Concept/Concept";
import Expense from '../Expenses/Expense';
import CourseGoal from '../CourseGoals/CourseGoals';
import Calculator from "../Calculator/Calculator";

function Content(props) {
      let content = '';
      if (props.idMenu==='expense') {
        content = <Expense/>;
      }else if(props.idMenu==='concept'){
        content = <Concept/>;
      }else if(props.idMenu==='course-goal'){
        content = <CourseGoal/>;
      }else if(props.idMenu==='calculator'){
        content = <Calculator/>;
      }else{
        content = <div>Menu Not Found</div>
      }
  return (
    <div className="content">
      {content}
    </div>
  );
}

export default Content;
