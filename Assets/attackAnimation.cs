using UnityEngine;
using System.Collections;

public class attackAnimation : MonoBehaviour {

	public void attack(){
		GetComponent<Animation> ().Play ("macheteSwing");
		if(!GetComponent<Animation>().IsPlaying("macheteSwing")){
			GetComponent<Animation>().Play("macheteIdle");
		}
		//GetComponent<Animation>()["macheteSwing"].speed = -1;
		//GetComponent<Animation> () ["macheteSwing"].time = 0;
		//GetComponent<Animation> ().Play ("macheteIdle");
	}

	public void reset(){
		if(!GetComponent<Animation>().IsPlaying("macheteSwing")){
			GetComponent<Animation>().Play("macheteIdle");
		}
	}

}
