const EventComponent: React.FC = () => {
  // typing the event handler
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent) => {
    console.log(event);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('clicked');
  };
  // end

  //typing the function for event handler
  const inputChangeHandler2: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(event);
  };

  const onDragStart2: React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log(event);
  };

  const handleClick2: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event);
  };
  // end

  return (
    <div>
      <input onChange={inputChangeHandler2} />
      <div draggable onDragStart={onDragStart2}>
        Drag Me!
      </div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default EventComponent;
