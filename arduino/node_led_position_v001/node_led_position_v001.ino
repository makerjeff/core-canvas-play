#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

#define PIN 6

// Parameter 1 = number of pixels in strip
// Parameter 2 = Arduino pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
Adafruit_NeoPixel strip = Adafruit_NeoPixel(8, PIN, NEO_GRB + NEO_KHZ800);
// COLORS
const uint32_t yellow = strip.Color(255,130,0);
const uint32_t green = strip.Color(0,255,0);
const uint32_t blue = strip.Color(0,0,255);
const uint32_t red = strip.Color(255,0,0);

// =======================
// VARIABLES =============
// =======================
String myString;

// =======================
// SETUP =================
// =======================
void setup() {
  Serial.begin(9600);
  Serial.setTimeout(3000);
  while (!Serial);  //used only for non atmega328 chips
  Serial.print("Serial active: Awaiting input... \r\n");
}

void loop() {
  if(Serial.available()) {
    myString = Serial.readStringUntil(';'); // read until limit char.
    Serial.setTimeout(2000);  //override default 1000ms timeout.

    Serial.print(myString);
    Serial.print("\r\n");
  }
}

// =======================
// CUSTOM FUNCTIONS ======
// =======================


