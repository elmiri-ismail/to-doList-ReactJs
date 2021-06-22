// Composant : Tâche
class Test extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let class_name = 'tache'
    class_name += this.props.done ? ' tache-faite' : ' tach-info';
  
    return (
      <div className={class_name}>
        <span>{this.props.value}</span>
        <i className="close">&times;</i>
      </div>
    )
  }
}

// Application
class Excite extends React.Component {

  tasksArray = [
      {value: 'Tâche 1', done: true},
      {value: 'Tâche 2', done: false},
      {value: 'Tâche 3', done: false}
    ];

  constructor(props) {
    super(props)

    
  }

  render() {
   
    let tasksArrayMap = this.tasksArray.map((task, i) => {
      return (
        <Test 
          key={i}
          value={task.value}
          done={task.done}
        />
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Les Tâches</h1>
            <form
              id="form-add"
              className="form-horizontal">
              <div className="input-group">
                <input type="text" id="addInput" className="form-control"  placeholder="Description de la tâche..." />
                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus-sign"></span>
                  </button>
                </div>
              </div>
            </form>

            {tasksArrayMap}
            
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Excite />, document.getElementById('app'));