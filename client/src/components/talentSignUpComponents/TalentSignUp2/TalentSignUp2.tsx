import React, {useState} from 'react';
import styles from './TalentSignUp2.module.scss';

interface TalentSignUp2Props {
	talentHandler: Function;
	progressHandler: Function
}

const TalentSignUp2: React.FC<TalentSignUp2Props> = ({ talentHandler, progressHandler }: TalentSignUp2Props) => {
	const [info, setInfo] = useState({occupationId: ''});

	const handleOptionChange: Function = (identifier: string): void => {
		setInfo({occupationId: identifier})
	}

	const handleSubmit = () => {
		talentHandler(info)
		info.occupationId === 'opt4' ? progressHandler(4) : progressHandler(3)
  };


  return (
			<div className={styles.TalentSignUp2}>
				<p>Welchen Job machst du derzeit?</p>
				<form onSubmit={handleSubmit}>
        <div className="radio">
          <label>
            <input type="radio" value="opt1" checked={info.occupationId === 'opt1'} onChange={()=> handleOptionChange('opt1')} />
            Krankenpfleger
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="opt2" checked={info.occupationId === 'opt2'} onChange={()=> handleOptionChange('opt2')} />
            Arzt
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="opt3" checked={info.occupationId === 'opt3'} onChange={()=> handleOptionChange('opt3')} />
            Sonstiges med Personal
          </label>
        </div>
				<div className="radio">
          <label>
            <input type="radio" value="opt4" checked={info.occupationId === 'opt4'} onChange={()=> handleOptionChange('opt4')} />
            Ich studiere noch
          </label>
        </div>
				<button>Weiter</button>
      </form>
			</div>
	)
};

export default TalentSignUp2;
