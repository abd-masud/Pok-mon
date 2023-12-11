export const CardModalInfo = (props: any) => {
  return (
    <div className="px-10 pb-1">
      <p className="pb-2">
        <span className="font-bold">Name :</span> {props.name}
      </p>
      <p className="pb-2">
        <span className="font-bold">Printed Total :</span> {props.printedTotal}
      </p>
      <p className="pb-2">
        <span className="font-bold">PTCGO Code :</span> {props.ptcgoCode}
      </p>
      <p className="pb-2">
        <span className="font-bold">Series :</span> {props.series}
      </p>
      <p className="pb-2">
        <span className="font-bold">Total :</span> {props.total}
      </p>
      <p className="pb-2">
        <span className="font-bold">Release Date :</span> {props.releaseDate}
      </p>
      <p className="pb-2">
        <span className="font-bold">Updated At :</span> {props.updatedAt}
      </p>
    </div>
  );
};
