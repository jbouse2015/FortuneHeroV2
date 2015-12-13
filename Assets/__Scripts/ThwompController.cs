using UnityEngine;
using System.Collections;

public class ThwompController : MonoBehaviour {

    float speed;
    Vector3 direction;
    float min;
    float max;
    float units = 0.9f;

    // Use this for initialization
    void Start () {
        max = transform.position.y;
        min = transform.position.y - units;

        direction = Vector3.down;
    }

    // Update is called once per frame
    void Update() { 
        if (direction == Vector3.down)
        {
            speed = 5.0f;
        }

        else if (direction == Vector3.up)
        {
            speed = 1.0f;
        }

        transform.Translate(direction * speed * Time.deltaTime);

    
        if (transform.position.y >= max)
        {
            direction = Vector3.down;
        }

        if (transform.position.y <= min)
        {
            direction = Vector3.up;
        }
    }
}

