[{
	'name': 'consume 1->1 armv61',
	'type': 'simple',
	'params': [{
		'time-limit': 30,
		'producer-count': 1,
		'consumer-count': 1
	}],
	'uri': 'amqp://guest:guest@black-pearl'
},

{
	'name': 'consume 1->2 armv61',
	'type': 'simple',
	'params': [{
		'time-limit': 30,
		'producer-count': 1,
		'consumer-count': 2
	}],
	'uri': 'amqp://guest:guest@black-pearl'
},

{
	'name': 'consume 5->5 armv61',
	'type': 'simple',
	'params': [{
		'time-limit': 30,
		'producer-count': 5,
		'consumer-count': 5
	}],
	'uri': 'amqp://guest:guest@black-pearl'
},

{
    'name': 'consume 7->7 armv61',
	'type': 'simple',
	'params': [{
		'time-limit': 30,
		'producer-count': 7,
		'consumer-count': 7
	}],
	'uri': 'amqp://guest:guest@black-pearl'
}

]
