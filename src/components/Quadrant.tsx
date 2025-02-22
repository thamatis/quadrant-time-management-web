interface QuadrantProps {
    title: string;
    tasks: string[];
  }
  
  const Quadrant: React.FC<QuadrantProps> = ({ title, tasks }) => {
    return (
      <div className="border p-4 rounded-lg bg-gray-100 shadow-sm h-64">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <ul className="list-disc pl-4 text-gray-700">
          {tasks.length > 0 ? (
            tasks.map((task, index) => <li key={index}>{task}</li>)
          ) : (
            <p className="text-gray-400">No tasks added</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default Quadrant;
  