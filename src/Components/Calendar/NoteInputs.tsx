import { FC, useMemo } from 'react';
import style from './Notes.module.scss';

export interface NotesInputProps {
  onChange: (options: { text?: string; hour?: number }) => void;
  text: string;
  hour: number | null;
  excludedHours?: (number | null)[];
}

const availableHours = new Array(13).fill(null).map((_, index) => index + 8);
const formatHour = (hour: number) =>
  `${hour.toString().length === 1 ? `0${hour}` : hour}:00`;
export const NoteInputs: FC<NotesInputProps> = ({
  hour,
  onChange,
  text,
  excludedHours = [],
}) => {
  const onChangeHour = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ hour: Number(e.target.value.slice(0, 2)) });

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ text: e.target.value });

  const filteredHours = useMemo(
    () => availableHours.filter((hour) => !excludedHours.includes(hour)),
    [excludedHours],
  );

  const options = filteredHours.map((hour) => (
    <option key={hour} value={formatHour(hour)} />
  ));

  return (
    <div>
      <input
        type="time"
        className={style.timeInput}
        list="timeList"
        value={formatHour(hour ?? 8)}
        onChange={onChangeHour}
      ></input>
      <datalist id="timeList">{options}</datalist>
      <div>
        <input
          className={style.textInput}
          type="text"
          value={text}
          onChange={onChangeText}
        ></input>
      </div>
    </div>
  );
};
