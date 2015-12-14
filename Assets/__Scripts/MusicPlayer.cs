using UnityEngine;
using System.Collections;

public class MusicPlayer : MonoBehaviour {

	void Awake()
	{
		DontDestroyOnLoad(gameObject);
	}
	
	void Start()
	{

	}

	void Update() {

		if (Application.loadedLevelName == "Level_One") {
			Destroy (gameObject);
		}
	}

}
