export default {
	env: process.env.NODE_ENV || 'development',
	context_broker: process.env.CONTEXT_BROKER || 'http://localhost:1026',
	server: {
		port: process.env.PORT || 3001,
		provider: process.env.IOTA_PROVIDER || 'https://nodes.devnet.iota.org:443',
		tcpProvider: process.env.IOTA_ZMQ_PROVIDER || 'tcp://zmq.devnet.iota.org:5556'
	},
	accounts: {
		"ff_farm": {
			"account_address": "YMHMAEVENUEVDQNHMCXTYHNFVCPREHDQ9S9ADTKKWUFPPSYICUBEFBSLFJFKFWKZD9LLCNJOZDARJDQYY",
			"account_private_key": "AVHBEICAKLNBWGDFIAKTEILVYLKCSXJSZCYF9NGYKYFWOBFNSCBVXPITJMVGHAPUNHLPIQOHK9YIXDLPV"
		},
		"bio_past": {
			"account_address": "BXIFNILCHIZOJUZMOIPPHBVTAMDINCUSVOZFIFKHPTBMJPKYKITMPIRXHVMZLYBXLAS9ZRIDDA9LYXAMZ",
			"account_private_key": "E9RLXF9WZ9ZGOGBYAVKYKTKGHAPZUJCSPKOSWOTMIGRTFZHBWZXMONKPPXAFFXCYOEYBULVWUNZNFHVKS"
		},
		"rewe": {
			"account_address": "CTEXIXXKCTBYBYRZPMEBSKODGEKWFSBIZVKOKWSFSKMQSHLUJARLYMDNVHCMXUQLPPOFEOFDLAUDXUTSD",
			"account_private_key": "OFGLSQXNPCSCABGTEOHVIKYXPAGLPWG9LPWFRRIPYTF9DOODWOIMVWTLBYNFDGRULIEGDQYRIKRCTAHPX"
		}
	}
};
