import meal1 from '../../../assets/meal1.png';
import meal2 from '../../../assets/meal2.png';
import meal3 from '../../../assets/meal3.png';
import expenseIcon from '../../../assets/expenseIcon.svg';
import vocherIcon from '../../../assets/vocherIcon.svg';

type Meal = {
	name: string;
	img: string;
	status: string;
	time: string;
	statusColor: string;
};

const meals: Meal[] = [
	{
		name: 'Chiken Hell',
		img: meal1,
		status: 'On The Way',
		time: '3:09 PM',
		statusColor: ''
	},
	{
		name: 'Swe Dish',
		img: meal2,
		status: 'Celceled',
		time: 'Yestarday',
		statusColor: 'text-red'
	},
	{
		name: 'Fish Hel Veg',
		img: meal3,
		status: 'Delivery',
		time: 'Yestaerday',
		statusColor: 'text-green'
	}
];

export default function ControlSection() {
	return (
		<section className='control'>
			<div className='container control_content'>
				<div className='control_text'>
					<h2 className='control_title'>
						Control <span className='text-primary'>Purchases</span> Via
						Dashboard
					</h2>
					<ul className='control_list'>
						{meals.map(meal => (
							<li className='control-item' key={meal.name}>
								<div className='control-item_left'>
									<img src={meal.img} alt={meal.name} />
								</div>
								<div className='control-item_right'>
									<h3 className='control-item_title'>{meal.name}</h3>
									<p className={`control-item_info ${meal.statusColor}`}>
										{meal.status}
									</p>
									<div className='control-item_time'>{meal.time}</div>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className='control_statistic control-statistic'>
					<div className='control-statistic_header'>
						<h4 className='control-statistic_title'>Purchases</h4>
						<select name='period' className='control-statistic_select'>
							<option value='1'>This mounth</option>
							<option value='2'>This week</option>
							<option value='3'>This year</option>
						</select>
					</div>
					<div className='control-statistic_expense'>
						<div className='control-statistic_expense-info'>
							<img src={expenseIcon} alt='icon' />
							<div className='control-statistic_expense-info-text'>
								<div className='control-statistic_expense-info-title'>
									Expense
								</div>
								<div className='control-statistic_expense-info-subtext'>
									Increased By 10%
								</div>
							</div>

							<div className='control-statistic_expense-info-price'>
								$409.00
							</div>
						</div>
						<div className='control-statistic_expense-line'></div>
					</div>
					<div className='control-statistic_vocher'>
						<div className='control-statistic_expense-info'>
							<img src={vocherIcon} alt='icon' />
							<div className='control-statistic_expense-info-text'>
								<div className='control-statistic_expense-info-title'>
									Vocher Usage
								</div>
								<div className='control-statistic_expense-info-subtext'>
									Increased By 5%
								</div>
							</div>

							<div className='control-statistic_expense-info-price'>$45.78</div>
						</div>
						<div className='control-statistic_vocher-line'></div>
					</div>
				</div>
			</div>
		</section>
	);
}
