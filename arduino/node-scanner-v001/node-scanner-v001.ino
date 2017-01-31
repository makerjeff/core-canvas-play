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

// KEY DEFS
const char key1 = 'q';
const char key2 = 'w';
const char key3 = 'e';
const char key4 = 'r';

// GLOBAL VARS
char val; // character value to store.

void setup() {
  Serial.begin(9600);
  
  strip.setBrightness(50);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
}

void loop() {
  //while there's data in the serial buffer...

  // =====================================
  // METHOD FOR PASING INDIVIDUAL STRINGS
  // =====================================
  if (Serial.available() > 0) {
    val = Serial.read();

    switch(val) {
      case 'q':
        Serial.write("key q pressed. \r\n");
        swipe_right(yellow);
        break;
      case 'w':
        Serial.write("key w pressed. \r\n");
        swipe_left(yellow);
        break;
      case 'a':
        Serial.write("key a pressed. \r\n");
        swipe_right(green);
        break;
      case 's':
        Serial.write("key s pressed. \r\n");
        swipe_left(green);
        break;
      case 'z':
        Serial.write("key a pressed. \r\n");
        swipe_right(red);
        break;
      case 'x':
        Serial.write("key s pressed. \r\n");
        swipe_left(red);
        break;

      case '1':
        Serial.write("key a pressed. \r\n");
        swipe_in(blue);
        break;
      case '2':
        Serial.write("key s pressed. \r\n");
        swipe_left(blue);
        break;
      default:
        return;
    }
  }

// ====================================
// METHOD FOR PARSING DATA STRINGS ====
// ====================================
//  while (Serial.available() > 0) {
//    int firstVal = Serial.parseInt();
//    int secondVal = Serial.parseInt();
//    int thirdVal = Serial.parseInt();
//
//    // if input char is 'newline' (use single quotes for chars)...
//    if(Serial.read() == ';') {
//      Serial.print(firstVal);
//      Serial.print(", ");
//      Serial.print(secondVal);
//      Serial.print(", ");
//      Serial.print(thirdVal);
//      Serial.println(".");
//    }
//  }
//  scan();
}

// =======================
// CUSTOM FUNCTIONS ======
// =======================

void swipe_in(uint32_t color) {

  int ledMatrix[5][8] = {
    {0,0,0,1,1,0,0,0},
    {0,0,1,0,0,1,0,0},
    {0,1,0,0,0,0,1,0},
    {1,0,0,0,0,0,0,1},
    {0,0,0,0,0,0,0,0}
  };
  
  //loops through the frames
  for(int i = 0; i < 5; i++) {
      //loops through the pixels
    for(int j = 0; j < 8; j++) {
      if(ledMatrix[i][j] == 0) {
        strip.setPixelColor(j, 0,0,0);
      } else {
        strip.setPixelColor(j, color);
      }
      strip.show();
      //delay(25);
    }
    delay(50);
  }
}

void swipe_right(uint32_t color){
  // swipe in
  for(int i = 0; i < 8; i++) {
    strip.setPixelColor(i, color);
    strip.show();
    delay(25);
  }
// swipe clear
  for(int i = 0; i<8; i++) {
    strip.setPixelColor(i, 0,0,0);
    strip.show();
    delay(25);  
  }
}

void swipe_left(uint32_t color){
  // swipe in
  for(int i = 8; i >= 0; i--) {
    strip.setPixelColor(i, color);
    strip.show();
    delay(25);
  }
// swipe clear
  for(int i = 8; i >= 0; i--) {
    strip.setPixelColor(i, 0,0,0);
    strip.show();
    delay(25);  
  }
}

void kill() {
  for(int i = 0; i < 8; i++) {
    strip.setPixelColor(i, 0, 0, 0);
    strip.show();
  }
}

void scan() {

// swipe in
  for(int i = 0; i < 8; i++) {
    strip.setPixelColor(i, 255, 130, 0);
    strip.show();
    delay(25);
  }
// swipe clear
  for(int i = 0; i<8; i++) {
    strip.setPixelColor(i, 0,0,0);
    strip.show();
    delay(25);  
  }

// HOLD
  delay(750);

  for(int i = 8; i >= 0; i--) {
    strip.setPixelColor(i, 255, 130,0);
    strip.show();
    delay(25);  
  }

// swipe in
    for(int i = 8; i >= 0; i--) {
    strip.setPixelColor(i, 0, 0,0);
    strip.show();
    delay(25);  
  }
}

