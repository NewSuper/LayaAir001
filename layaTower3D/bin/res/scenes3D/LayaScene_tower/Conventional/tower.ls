{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"tower",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.4348464,
						6.012607,
						-2.691957
					],
					"rotation":[
						-9.12878E-08,
						0.8278684,
						0.5609224,
						5.331822E-08
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"fieldOfView":60,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1921569,
						0.3019608,
						0.4745098,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						3,
						0
					],
					"rotation":[
						0.1093816,
						0.8754261,
						0.4082179,
						-0.2345697
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":0,
					"color":[
						1,
						0.9568627,
						0.8392157
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"tower_map",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						1,
						0,
						0
					],
					"scale":[
						0.7,
						1,
						0.6
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/res/Materials/map1.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"monester",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"Sprite3D",
						"props":{
							"name":"anim",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0.24
							],
							"rotation":[
								0,
								1,
								0,
								0
							],
							"scale":[
								0.3,
								0.3,
								0.3
							]
						},
						"components":[
							{
								"type":"Animator",
								"avatar":{
									"path":"Assets/res/Character/Model/jia_long_001_ty-anim-jia_long_001_tyAvatar.lav",
									"linkSprites":{}
								},
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[
											{
												"name":"walk",
												"clipPath":"Assets/res/Character/Model/jia_long_001_ty-walk.lani"
											}
										]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[
							{
								"type":"SkinnedMeshSprite3D",
								"props":{
									"name":"jia_long_001_ty001",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0,
										0,
										-1.311302E-08
									],
									"rotation":[
										0.7071068,
										0,
										0,
										-0.7071067
									],
									"scale":[
										0.9999999,
										1,
										1
									],
									"rootBone":"Bip01 Pelvis",
									"boundBox":{
										"min":[
											-2.059579,
											-1.164133,
											-1.028648
										],
										"max":[
											2.429148,
											0.9850273,
											0.884582
										]
									},
									"boundSphere":{
										"center":[
											0.1847845,
											-0.08955279,
											-0.07203302
										],
										"radius":2.665896
									},
									"materials":[
										{
											"path":"Assets/res/Character/Model/Materials/jia_long_001_ty.lmat"
										}
									],
									"meshPath":"Assets/res/Character/Model/jia_long_001_ty-jia_long_001_ty001.lm"
								},
								"components":[],
								"child":[]
							}
						]
					}
				]
			}
		]
	}
}