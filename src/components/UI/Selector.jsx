export default function Selector(props) {
    const changer = (e) => {
        e.preventDefault();
        props.selectFunc();
    };
    console.log("hi there");
  return (
    <select ref={props.ref} onChange={changer} className="w-60 h-10 border border-gray-700 p-2 rounded-sm text-center">
        {props.data.map(item => <option key={item} value={item}>{item}</option>)}
    </select>
  )
}
