export const StatCard = ({image, label, value, unit, description}: any) => (
  <div className="px-4">
    <p className={`text-[12.8px] uppercase font-normal py-2 opacity-50 ${!label.length && 'h-8'}`}>{label}</p>
    <p className="text-[28.8px] p-0.5 flex items-start justify-start">
      {image}
      <div className="pl-1">
        <span className="font-normal">{value}</span>&nbsp;
        {unit && <span className="text-base font-light">/{unit}</span>}
        {description && <p className="text-[12.8px] font-normal leading-[1.1] p-0.5">{description}</p>}
      </div>
    </p>
  </div>
)
