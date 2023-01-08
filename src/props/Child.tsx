interface ChildProps {
  color: string;
  onClick: () => void;
  // children: string
}

// bad way
// cannot received children props if you do not declare the children's annotation on the interface
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Child is {color}!<button onClick={onClick}>Click me</button>
    </div>
  );
};

// good way to create type definition for functional component
// good when using open and closing tags <Child></Child>
export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
